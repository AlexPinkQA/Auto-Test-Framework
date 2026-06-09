import path from 'path';
import { BrowserContext, chromium, Page } from 'playwright';
import { createPixiHelper, injectPixiLocator } from './pixi-locator';

export interface ContainerInfo {
  name: string;
  type: string;
  visible: boolean;
  alpha: number;
  x: number;
  y: number;
  bounds: { x: number; y: number; width: number; height: number } | null;
}

const EXTENSION_PATH = path.resolve(__dirname, '../../extensions/pixi-devtools');

/**
 * Launches a persistent browser context with the Pixi DevTools extension loaded.
 * Returns { context, page } ready to use.
 */
export async function launchWithDevTools(
  viewport = { width: 1280, height: 720 },
  recordVideo?: { dir: string },
): Promise<{ context: BrowserContext; page: Page; pixi: ReturnType<typeof createPixiHelper> }> {
  const context = await chromium.launchPersistentContext('', {
    headless: false,
    args: [
      `--disable-extensions-except=${EXTENSION_PATH}`,
      `--load-extension=${EXTENSION_PATH}`,
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
    viewport,
    ...(recordVideo ? { recordVideo: { dir: recordVideo.dir, size: viewport } } : {}),
  });

  const page = context.pages()[0] ?? await context.newPage();
  await injectPixiUtils(page);
  await injectPixiLocator(page);
  const pixi = createPixiHelper(page);
  return { context, page, pixi };
}

/**
 * Injects __pixiUtils into the page. Must be called before page.goto().
 * Checks __PIXI_DEVTOOLS__ (from the extension) first, then falls back to known globals.
 */
export async function injectPixiUtils(page: Page): Promise<void> {
  await page.addInitScript(() => {
    (window as any).__pixiUtils = {
      getApp() {
        const w = window as any;
        return w.__PIXI_DEVTOOLS__?.app
          || w.__PIXI_APP__
          || w.app
          || w.pixiApp
          || w.game?.app;
      },

      /**
       * BFS traversal from `parent` until it finds a container named `name`.
       * Returns null if not found.
       */
      findContainerByName(parent: any, name: string): any {
        if (!parent) return null;
        const queue: any[] = [parent];
        while (queue.length > 0) {
          const current = queue.shift();
          if (current.name === name) return current;
          for (const child of current.children ?? []) queue.push(child);
        }
        return null;
      },

      /**
       * Directly invokes the registered EventEmitter handlers on the node.
       * Supports both PixiJS v6 (event.data) and v7+ (event.pointerId etc).
       * No coordinates needed.
       */
      triggerButton(node: any): boolean {
        // PixiJS v6 wraps pointer info inside event.data
        const data = {
          pointerType: 'mouse', pointerId: 1, isPrimary: true,
          button: 0, buttons: 1,
          global: { x: 0, y: 0 },
          getLocalPosition: () => ({ x: 0, y: 0 }),
          originalEvent: { pointerType: 'mouse', pointerId: 1, button: 0, buttons: 1 },
        };
        const makeEvent = (type: string) => ({
          type, target: node, currentTarget: node,
          // v6 fields
          data,
          // v7+ fields (flat)
          pointerId: 1, pointerType: 'mouse', button: 0, buttons: 1, isPrimary: true,
          stopPropagation() {}, stopImmediatePropagation() {}, preventDefault() {},
          propagationStopped: false, propagationImmediatelyStopped: false,
        });

        let triggered = false;
        for (const evName of ['pointerdown', 'pointerup', 'pointertap', 'click']) {
          const entry = node._events?.[evName];
          if (!entry) continue;
          const handlers = Array.isArray(entry) ? entry : [entry];
          handlers.forEach((h: any) => {
            try {
              (h.fn ?? h).call(h.context ?? node, makeEvent(evName));
              triggered = true;
            } catch {}
          });
        }
        return triggered;
      },

      /** Resolves the starting node: by parent name, or stage if omitted. */
      resolveRoot(fromParent?: string): any {
        const app = (window as any).__pixiUtils.getApp();
        if (!app?.stage) return null;
        if (!fromParent) return app.stage;
        return (window as any).__pixiUtils.findContainerByName(app.stage, fromParent);
      },
    };
  });
}

/**
 * Finds a container by name in the PixiJS scene graph.
 * @param fromParent - optional name of the parent to start the search from (defaults to stage)
 */
export async function findContainer(
  page: Page,
  name: string,
  fromParent?: string,
): Promise<ContainerInfo | null> {
  return page.evaluate(
    ({ name, fromParent }) => {
      const utils = (window as any).__pixiUtils;
      const root = utils.resolveRoot(fromParent);
      if (!root) return null;

      const node = utils.findContainerByName(root, name);
      if (!node) return null;

      let bounds = null;
      try {
        const b = node.getBounds();
        bounds = { x: Math.round(b.x), y: Math.round(b.y), width: Math.round(b.width), height: Math.round(b.height) };
      } catch {}

      return {
        name: node.name ?? '',
        type: node.constructor?.name ?? 'Unknown',
        visible: node.visible !== false,
        alpha: node.alpha ?? 1,
        x: Math.round(node.x ?? 0),
        y: Math.round(node.y ?? 0),
        bounds,
      };
    },
    { name, fromParent },
  );
}

/**
 * Waits until a container with the given name appears and is visible.
 * @param fromParent - optional parent name to scope the search
 * @param timeout - ms (default 30000)
 */
export async function waitForContainer(
  page: Page,
  name: string,
  fromParent?: string,
  timeout = 30000,
): Promise<void> {
  await page.waitForFunction(
    ({ name, fromParent }) => {
      const utils = (window as any).__pixiUtils;
      if (!utils) return false;
      const root = utils.resolveRoot(fromParent);
      if (!root) return false;
      const node = utils.findContainerByName(root, name);
      return node != null && node.visible !== false;
    },
    { name, fromParent },
    { timeout },
  );
}

/**
 * Clicks a container using real mouse events at dynamic PixiJS bounds coordinates.
 * Shows visible cursor movement. Falls back to triggerButton if bounds unavailable.
 * @param fromParent - optional parent name to scope the search
 */
export async function clickContainer(
  page: Page,
  name: string,
  fromParent?: string,
): Promise<boolean> {
  // Get page-space center of the button using PixiJS bounds + canvas CSS scale
  const coords = await page.evaluate(
    ({ name, fromParent }) => {
      const utils = (window as any).__pixiUtils;
      const root = utils.resolveRoot(fromParent);
      if (!root) return null;

      const all: any[] = [];
      const queue = [root];
      while (queue.length) {
        const cur = queue.shift();
        if (cur.name === name) all.push(cur);
        for (const c of cur.children ?? []) queue.push(c);
      }
      const node = all.find((n: any) => n.worldVisible) ?? all[0];
      if (!node) return null;

      let bounds: any = null;
      try { bounds = node.getBounds(); } catch {}
      if (!bounds || bounds.width === 0) return null;

      const canvas = document.querySelector('canvas');
      if (!canvas) return null;
      const rect = canvas.getBoundingClientRect();
      // Account for CSS scaling of the canvas element
      const scaleX = rect.width / (canvas as HTMLCanvasElement).width;
      const scaleY = rect.height / (canvas as HTMLCanvasElement).height;

      return {
        x: rect.left + (bounds.x + bounds.width / 2) * scaleX,
        y: rect.top + (bounds.y + bounds.height / 2) * scaleY,
      };
    },
    { name, fromParent },
  );

  if (coords) {
    await page.mouse.move(coords.x, coords.y);
    await page.mouse.click(coords.x, coords.y);
    return true;
  }

  // Fallback: direct JS handler invocation
  return page.evaluate(
    ({ name, fromParent }) => {
      const utils = (window as any).__pixiUtils;
      const root = utils.resolveRoot(fromParent);
      if (!root) return false;
      const all: any[] = [];
      const queue = [root];
      while (queue.length) {
        const cur = queue.shift();
        if (cur.name === name) all.push(cur);
        for (const c of cur.children ?? []) queue.push(c);
      }
      const node = all.find((n: any) => n.worldVisible) ?? all[0];
      if (!node) return false;
      return utils.triggerButton(node);
    },
    { name, fromParent },
  );
}
