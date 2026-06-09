import { DEFAULT_CONFIG, buildGameUrl } from './config';
import { launchWithDevTools } from './utils/pixi';
import * as fs from 'fs';
import * as path from 'path';

async function inspectPixi(): Promise<void> {
  const url = buildGameUrl(DEFAULT_CONFIG);
  console.log(`Opening: ${url}\n`);

  const { context, page } = await launchWithDevTools();

  await page.goto(url);
  await page.waitForLoadState('load', { timeout: 30000 });

  console.log('Waiting for PixiJS app...');
  await page.waitForFunction(() => (window as any).__pixiUtils?.getApp()?.stage, { timeout: 30000 });

  console.log('Waiting for game to finish loading...');
  await page.waitForFunction(() => {
    const app = (window as any).__pixiUtils?.getApp();
    return app?.stage?.children?.length > 5;
  }, { timeout: 60000 });

  await page.waitForTimeout(2000);

  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);
  await page.screenshot({ path: path.join(screenshotsDir, 'before-start.png') });
  console.log('Screenshot: before-start.png\n');

  // Click btn_start (preloader)
  console.log('Looking for btn_start...');
  const startClicked = await page.evaluate(() => {
    const utils = (window as any).__pixiUtils;
    const btn = utils.findContainerByName(utils.getApp().stage, 'btn_start');
    if (!btn) return false;
    const fakeEvent = { target: btn, currentTarget: btn, stopPropagation: () => {}, preventDefault: () => {} };
    for (const ev of ['pointerdown', 'pointerup', 'pointertap', 'click']) {
      try { btn.emit(ev, fakeEvent); } catch {}
    }
    return true;
  });

  if (startClicked) {
    console.log('Clicked btn_start, waiting for game to open...');
    await page.waitForTimeout(4000);
  } else {
    console.log('btn_start not found, continuing...');
    await page.waitForTimeout(2000);
  }

  await page.screenshot({ path: path.join(screenshotsDir, 'game-ready.png') });
  console.log('Screenshot: game-ready.png\n');

  // Scan all interactive nodes
  const result = await page.evaluate(() => {
    const app = (window as any).__pixiUtils.getApp();
    if (!app?.stage) return { error: 'No app' };

    const results: any[] = [];

    function traverse(node: any, depth: number, nodePath: string): void {
      if (!node || depth > 30) return;
      const interactive = node.interactive || node.eventMode === 'static' || node.eventMode === 'dynamic' || node.buttonMode;
      const hasClick = !!(node._events?.click || node._events?.pointerdown || node._events?.mousedown || node._events?.pointertap);
      const visible = node.visible !== false && node.alpha > 0;

      if ((interactive || hasClick) && visible) {
        let bounds = null;
        try { bounds = node.getBounds(); } catch {}
        results.push({
          name: node.name || '',
          path: nodePath,
          type: node.constructor?.name || 'Unknown',
          eventMode: node.eventMode || null,
          events: Object.keys(node._events || {}),
          bounds: bounds ? {
            x: Math.round(bounds.x), y: Math.round(bounds.y),
            w: Math.round(bounds.width), h: Math.round(bounds.height),
          } : null,
          text: node.text || node._text || '',
        });
      }

      for (const [i, child] of (node.children || []).entries()) {
        traverse(child, depth + 1, `${nodePath}[${i}]${child.name ? `(${child.name})` : ''}`);
      }
    }

    traverse(app.stage, 0, 'stage');
    return { nodes: results, stageChildren: app.stage.children?.length, pixiVersion: (window as any).PIXI?.VERSION };
  });

  if ('error' in result) {
    console.log('Error:', result.error);
  } else {
    console.log(`PixiJS version: ${result.pixiVersion}`);
    console.log(`Stage children: ${result.stageChildren}`);
    console.log(`\nInteractive nodes: ${result.nodes.length}\n`);

    result.nodes.forEach((node: any, i: number) => {
      const label = node.name || node.text || `(${node.type})`;
      const pos = node.bounds
        ? `x=${node.bounds.x} y=${node.bounds.y} ${node.bounds.w}x${node.bounds.h}`
        : 'no bounds';
      console.log(`[${i + 1}] "${label}" [${node.type}]  ${pos}  events:[${node.events.join(',')}]`);
      if (node.text) console.log(`     text: "${node.text}"`);
    });
  }

  await context.close();
  console.log('\nBrowser closed.');
}

inspectPixi().catch(console.error);
