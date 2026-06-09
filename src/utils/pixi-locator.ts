import { Page } from 'playwright';

// ─── Selector parsing ─────────────────────────────────────────────────────────

interface MetaFilter {
  key: string;
  op: '=' | '!=' | '*=' | '^=' | '$=' | '~=' | '!' | '';
  value: string;
}

interface ParsedSelector {
  name: string;       // name part, may contain wildcards
  filters: MetaFilter[];
}

function parseSelector(raw: string): ParsedSelector {
  const bracketMatch = raw.match(/^([^\[]*)((?:\[[^\]]*\])*)$/);
  const name = bracketMatch ? bracketMatch[1].trim() : raw.trim();
  const filtersStr = bracketMatch ? bracketMatch[2] : '';

  const filters: MetaFilter[] = [];
  const filterRegex = /\[([^\]]*)\]/g;
  let m: RegExpExecArray | null;
  while ((m = filterRegex.exec(filtersStr)) !== null) {
    const inner = m[1].trim();
    if (inner === '') {
      filters.push({ key: '', op: '', value: '' }); // has any metadata
      continue;
    }
    const opMatch = inner.match(/^(!)?(\w+)(?:(!=|\*=|\^=|\$=|~=|=)(.*))?$/);
    if (!opMatch) continue;
    if (opMatch[1]) {
      filters.push({ key: opMatch[2], op: '!', value: '' });
    } else {
      filters.push({ key: opMatch[2], op: (opMatch[3] as MetaFilter['op']) || '', value: opMatch[4] ?? '' });
    }
  }

  return { name, filters };
}

function matchName(nodeName: string, pattern: string): boolean {
  if (!pattern) return true;
  if (!pattern.includes('*')) return nodeName === pattern;
  const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
  return new RegExp(`^${escaped}$`).test(nodeName);
}

function matchFilters(node: any, filters: MetaFilter[]): boolean {
  if (!filters.length) return true;
  const meta = node._item_meta ?? node.automationMeta ?? node.meta ?? {};
  for (const f of filters) {
    if (f.op === '') { // has any metadata
      if (!Object.keys(meta).length) return false;
      continue;
    }
    if (f.op === '!') { if (f.key in meta) return false; continue; }
    const val = String(meta[f.key] ?? '');
    if (f.op === '=')  { if (val !== f.value) return false; }
    else if (f.op === '!=') { if (val === f.value) return false; }
    else if (f.op === '*=') { if (!val.includes(f.value)) return false; }
    else if (f.op === '^=') { if (!val.startsWith(f.value)) return false; }
    else if (f.op === '$=') { if (!val.endsWith(f.value)) return false; }
    else if (f.op === '~=') { if (!new RegExp(f.value).test(val)) return false; }
  }
  return true;
}

// ─── Browser-side helpers (injected via addInitScript) ────────────────────────

export async function injectPixiLocator(page: Page): Promise<void> {
  await page.addInitScript(() => {
    function getApp(): any {
      const w = window as any;
      return w.__PIXI_DEVTOOLS__?.app || w.__PIXI_APP__ || w.app || w.pixiApp || w.game?.app;
    }

    // BFS find all nodes matching a predicate, starting from `root`
    function findAll(root: any, predicate: (n: any) => boolean): any[] {
      const results: any[] = [];
      const queue = [root];
      while (queue.length) {
        const node = queue.shift()!;
        if (predicate(node)) results.push(node);
        for (const child of node.children ?? []) queue.push(child);
      }
      return results;
    }

    function matchName(nodeName: string, pattern: string): boolean {
      if (!pattern) return true;
      if (!pattern.includes('*')) return nodeName === pattern;
      const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
      return new RegExp(`^${escaped}$`).test(nodeName);
    }

    function matchFilters(node: any, filters: any[]): boolean {
      if (!filters.length) return true;
      const meta = node._item_meta ?? node.automationMeta ?? node.meta ?? {};
      for (const f of filters) {
        if (f.op === '') { if (!Object.keys(meta).length) return false; continue; }
        if (f.op === '!') { if (f.key in meta) return false; continue; }
        const val = String(meta[f.key] ?? '');
        if (f.op === '=')  { if (val !== f.value) return false; }
        else if (f.op === '!=') { if (val === f.value) return false; }
        else if (f.op === '*=') { if (!val.includes(f.value)) return false; }
        else if (f.op === '^=') { if (!val.startsWith(f.value)) return false; }
        else if (f.op === '$=') { if (!val.endsWith(f.value)) return false; }
        else if (f.op === '~=') { if (!new RegExp(f.value).test(val)) return false; }
      }
      return true;
    }

    function clickNode(node: any): boolean {
      const canvas = document.querySelector('canvas');
      if (!canvas) return false;
      let bounds: any;
      try { bounds = node.getBounds(); } catch { return false; }
      const rect = canvas.getBoundingClientRect();
      const scaleX = rect.width / (canvas.width || rect.width);
      const scaleY = rect.height / (canvas.height || rect.height);
      const clientX = rect.left + (bounds.x + bounds.width / 2) * scaleX;
      const clientY = rect.top + (bounds.y + bounds.height / 2) * scaleY;
      const opts = { bubbles: true, cancelable: true, clientX, clientY, pointerId: 1 };
      canvas.dispatchEvent(new PointerEvent('pointerdown', opts));
      canvas.dispatchEvent(new PointerEvent('pointerup', opts));
      canvas.dispatchEvent(new PointerEvent('pointertap', opts));
      canvas.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, clientX, clientY }));
      return true;
    }

    (window as any).__pixiLocator = { getApp, findAll, matchName, matchFilters, clickNode };
  });
}

// ─── Node-side serialisation helper ──────────────────────────────────────────

function serializeNode(node: any) {
  let bounds = null;
  try { const b = node.getBounds(); bounds = { x: Math.round(b.x), y: Math.round(b.y), width: Math.round(b.width), height: Math.round(b.height) }; } catch {}
  return {
    name: node.name ?? '',
    type: node.constructor?.name ?? 'Unknown',
    visible: node.visible !== false,
    alpha: node.alpha ?? 1,
    x: Math.round(node.x ?? 0),
    y: Math.round(node.y ?? 0),
    bounds,
    meta: node._item_meta ?? node.automationMeta ?? node.meta ?? {},
  };
}

// ─── PixiLocator class ────────────────────────────────────────────────────────

export class PixiLocator {
  constructor(
    private page: Page,
    private selector: string,
    private parentSelector?: string,
  ) {}

  /** Scope the search inside a named parent. */
  locator(selector: string): PixiLocator {
    return new PixiLocator(this.page, selector, this.selector);
  }

  /** Returns all matching nodes. */
  async all() {
    return this.page.evaluate(
      ({ sel, parentSel }) => {
        const loc = (window as any).__pixiLocator;
        const parsed = loc.parseSel(sel);
        const root = parentSel
          ? loc.findAll(loc.getApp().stage, (n: any) => loc.matchName(n.name ?? '', loc.parseSel(parentSel).name) && loc.matchFilters(n, loc.parseSel(parentSel).filters))[0]
          : loc.getApp()?.stage;
        if (!root) return [];
        return loc.findAll(root, (n: any) => loc.matchName(n.name ?? '', parsed.name) && loc.matchFilters(n, parsed.filters)).map(loc.serializeNode);
      },
      { sel: this.selector, parentSel: this.parentSelector },
    );
  }

  private async resolveNode(index = 0) {
    const { name, filters } = parseSelector(this.selector);
    const parentName = this.parentSelector ? parseSelector(this.parentSelector).name : undefined;
    return this.page.evaluate(
      ({ name, filters, parentName, index }) => {
        const loc = (window as any).__pixiLocator;
        const root = parentName
          ? loc.findAll(loc.getApp().stage, (n: any) => loc.matchName(n.name ?? '', parentName))[0]
          : loc.getApp()?.stage;
        if (!root) return null;
        const nodes = loc.findAll(root, (n: any) => loc.matchName(n.name ?? '', name) && loc.matchFilters(n, filters));
        return nodes[index] ? loc.serializeNode(nodes[index]) : null;
      },
      { name, filters, parentName, index },
    );
  }

  async first() { return this.resolveNode(0); }
  async last() {
    const { name, filters } = parseSelector(this.selector);
    const parentName = this.parentSelector ? parseSelector(this.parentSelector).name : undefined;
    return this.page.evaluate(
      ({ name, filters, parentName }) => {
        const loc = (window as any).__pixiLocator;
        const root = parentName
          ? loc.findAll(loc.getApp().stage, (n: any) => loc.matchName(n.name ?? '', parentName))[0]
          : loc.getApp()?.stage;
        if (!root) return null;
        const nodes = loc.findAll(root, (n: any) => loc.matchName(n.name ?? '', name) && loc.matchFilters(n, filters));
        return nodes.length ? loc.serializeNode(nodes[nodes.length - 1]) : null;
      },
      { name, filters, parentName },
    );
  }
  async nth(index: number) { return this.resolveNode(index); }

  async parent() {
    const { name, filters } = parseSelector(this.selector);
    return this.page.evaluate(
      ({ name, filters }) => {
        const loc = (window as any).__pixiLocator;
        const node = loc.findAll(loc.getApp().stage, (n: any) => loc.matchName(n.name ?? '', name) && loc.matchFilters(n, filters))[0];
        return node?.parent ? loc.serializeNode(node.parent) : null;
      },
      { name, filters },
    );
  }

  async children(childSelector?: string) {
    const { name, filters } = parseSelector(this.selector);
    const childParsed = childSelector ? parseSelector(childSelector) : null;
    return this.page.evaluate(
      ({ name, filters, childParsed }) => {
        const loc = (window as any).__pixiLocator;
        const node = loc.findAll(loc.getApp().stage, (n: any) => loc.matchName(n.name ?? '', name) && loc.matchFilters(n, filters))[0];
        if (!node) return [];
        let kids = node.children ?? [];
        if (childParsed) kids = kids.filter((c: any) => loc.matchName(c.name ?? '', childParsed.name) && loc.matchFilters(c, childParsed.filters));
        return kids.map(loc.serializeNode);
      },
      { name, filters, childParsed },
    );
  }

  /** Waits until at least one matching node is visible. */
  async waitFor(timeout = 30000): Promise<void> {
    const { name, filters } = parseSelector(this.selector);
    const parentName = this.parentSelector ? parseSelector(this.parentSelector).name : undefined;
    await this.page.waitForFunction(
      ({ name, filters, parentName }) => {
        const loc = (window as any).__pixiLocator;
        if (!loc) return false;
        const root = parentName
          ? loc.findAll(loc.getApp()?.stage, (n: any) => loc.matchName(n.name ?? '', parentName))?.[0]
          : loc.getApp()?.stage;
        if (!root) return false;
        const node = loc.findAll(root, (n: any) => loc.matchName(n.name ?? '', name) && loc.matchFilters(n, filters))[0];
        return node != null && node.visible !== false;
      },
      { name, filters, parentName },
      { timeout },
    );
  }

  /** Clicks the first matching node using canvas PointerEvents at dynamic coordinates. */
  async click(): Promise<void> {
    const { name, filters } = parseSelector(this.selector);
    const parentName = this.parentSelector ? parseSelector(this.parentSelector).name : undefined;
    const ok = await this.page.evaluate(
      ({ name, filters, parentName }) => {
        const loc = (window as any).__pixiLocator;
        const root = parentName
          ? loc.findAll(loc.getApp().stage, (n: any) => loc.matchName(n.name ?? '', parentName))[0]
          : loc.getApp()?.stage;
        if (!root) return false;
        const nodes = loc.findAll(root, (n: any) => loc.matchName(n.name ?? '', name) && loc.matchFilters(n, filters));
        const node = nodes.find((n: any) => n.worldVisible) ?? nodes[0];
        if (!node) return false;
        return loc.clickNode(node);
      },
      { name, filters, parentName },
    );
    if (!ok) throw new Error(`pixi.find('${this.selector}').click() — element not found or canvas missing`);
  }
}

// ─── Entry point ──────────────────────────────────────────────────────────────

export function createPixiHelper(page: Page) {
  // Patch serialiseNode and parseSel into the injected utils at runtime
  page.addInitScript(() => {
    const loc = (window as any).__pixiLocator;
    if (!loc) return;

    loc.serializeNode = (node: any) => {
      let bounds = null;
      try { const b = node.getBounds(); bounds = { x: Math.round(b.x), y: Math.round(b.y), width: Math.round(b.width), height: Math.round(b.height) }; } catch {}
      return { name: node.name ?? '', type: node.constructor?.name ?? 'Unknown', visible: node.visible !== false, alpha: node.alpha ?? 1, x: Math.round(node.x ?? 0), y: Math.round(node.y ?? 0), bounds, meta: node._item_meta ?? node.automationMeta ?? node.meta ?? {} };
    };

    loc.parseSel = (raw: string) => {
      const bracketMatch = raw.match(/^([^\[]*)((?:\[[^\]]*\])*)$/);
      const name = bracketMatch ? bracketMatch[1].trim() : raw.trim();
      const filtersStr = bracketMatch ? bracketMatch[2] : '';
      const filters: any[] = [];
      const re = /\[([^\]]*)\]/g; let m: RegExpExecArray | null;
      while ((m = re.exec(filtersStr)) !== null) {
        const inner = m[1].trim();
        if (inner === '') { filters.push({ key: '', op: '', value: '' }); continue; }
        const om = inner.match(/^(!)?(\w+)(?:(!=|\*=|\^=|\$=|~=|=)(.*))?$/);
        if (!om) continue;
        filters.push(om[1] ? { key: om[2], op: '!', value: '' } : { key: om[2], op: om[3] || '', value: om[4] ?? '' });
      }
      return { name, filters };
    };
  });

  return {
    find: (selector: string) => new PixiLocator(page, selector),
  };
}
