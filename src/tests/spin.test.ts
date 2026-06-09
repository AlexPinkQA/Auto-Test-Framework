import * as path from 'path';
import { getConfig, buildGameUrl } from '../config';
import { launchWithDevTools, waitForContainer, clickContainer } from '../utils/pixi';
import { Page } from 'playwright';

async function getBet(page: Page): Promise<string | null> {
  return page.evaluate(() => {
    const app = (window as any).__PIXI_APP__ || (window as any).app || (window as any).pixiApp || (window as any).game?.app;
    if (!app?.stage) return null;
    const texts: string[] = [];
    function scan(node: any) {
      if (!node || node.visible === false) return;
      const t = node.text ?? node._text;
      if (t !== undefined && t !== null && String(t).trim()) texts.push(String(t).trim());
      for (const c of node.children ?? []) scan(c);
    }
    scan(app.stage);
    const idx = texts.findIndex(t => t === 'TOTAL BET');
    return idx >= 0 ? texts[idx + 1] ?? null : null;
  });
}

async function getBalance(page: Page): Promise<string | null> {
  return page.evaluate(() => {
    const app = (window as any).__PIXI_APP__ || (window as any).app || (window as any).pixiApp || (window as any).game?.app;
    if (!app?.stage) return null;
    const texts: string[] = [];
    function scan(node: any) {
      if (!node || node.visible === false) return;
      const t = node.text ?? node._text;
      if (t !== undefined && t !== null && String(t).trim()) texts.push(String(t).trim());
      for (const c of node.children ?? []) scan(c);
    }
    scan(app.stage);
    const idx = texts.findIndex(t => t === 'BALANCE');
    return idx >= 0 ? texts[idx + 1] ?? null : null;
  });
}

async function clickBetButton(page: Page, name: string): Promise<void> {
  await page.evaluate((name: string) => {
    const utils = (window as any).__pixiUtils;
    const app = utils.getApp();
    if (!app?.stage) return;
    const all: any[] = [];
    const queue = [app.stage];
    while (queue.length) {
      const cur = queue.shift();
      if (cur.name === name) all.push(cur);
      for (const c of cur.children ?? []) queue.push(c);
    }
    const node = all.find((n: any) => n.worldVisible) ?? all[0];
    if (node) utils.triggerButton(node);
  }, name);
  await page.waitForTimeout(300);
}

async function setBet(page: Page, target: string): Promise<void> {
  const toNum = (s: string) => parseFloat(s.replace(/[€,]/g, ''));
  // Wait until bet value is readable
  let current: string | null = null;
  for (let i = 0; i < 20; i++) {
    current = await getBet(page);
    if (current) break;
    await page.waitForTimeout(500);
  }
  if (current === target) return;

  const dir = toNum(current ?? '0') < toNum(target) ? 'btn_plus' : 'btn_minus';
  for (let i = 0; i < 20; i++) {
    await clickBetButton(page, dir);
    current = await getBet(page);
    console.log(`      bet → ${current}`);
    if (current === target) return;
  }
  throw new Error(`Could not set bet to ${target}, stopped at ${current}`);
}

async function runTest(): Promise<void> {
  const url = buildGameUrl(getConfig());
  console.log('TEST: Open game → skip preloader → set bet → spin\n');

  const videosDir = path.resolve(__dirname, '../../videos');
  const isCI = !!process.env.CI;
  const { context, page } = await launchWithDevTools(undefined, isCI ? { dir: videosDir } : undefined);

  try {
    console.log('[1/5] Opening game...');
    await page.goto(url);
    await page.waitForLoadState('load', { timeout: 30000 });

    console.log('[2/5] Waiting for preloader (btn_start)...');
    await waitForContainer(page, 'btn_start', undefined, 60000);
    console.log('      btn_start found — clicking...');

    // Same approach as preloader.test.ts (confirmed working)
    const clickPos = await page.evaluate(() => {
      const w = window as any;
      const app = w.__PIXI_APP__ || w.app || w.pixiApp || w.game?.app;
      function find(node: any, name: string): any {
        if (!node) return null;
        if (node.name === name) return node;
        for (const c of node.children || []) { const f = find(c, name); if (f) return f; }
        return null;
      }
      const btn = find(app?.stage, 'btn_start');
      if (!btn) return { x: 640, y: 360 };
      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      const rect = canvas.getBoundingClientRect();
      const scaleX = rect.width / (canvas.width || rect.width);
      const scaleY = rect.height / (canvas.height || rect.height);
      try {
        const b = btn.getBounds();
        return { x: Math.round(rect.left + (b.x + b.width / 2) * scaleX), y: Math.round(rect.top + (b.y + b.height / 2) * scaleY) };
      } catch { return { x: 640, y: 360 }; }
    });
    console.log(`      btn_start center: (${clickPos.x}, ${clickPos.y})`);

    await page.mouse.click(clickPos.x, clickPos.y);
    await page.waitForTimeout(2000);
    await page.mouse.move(clickPos.x, clickPos.y);
    await page.mouse.down();
    await page.waitForTimeout(100);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    await page.mouse.click(640, 360);

    console.log('      Waiting for game to load...');
    await page.waitForTimeout(5000);
    console.log('      Game loaded.');

    // Dismiss hardware acceleration warning popup if present
    await page.evaluate(() => {
      const utils = (window as any).__pixiUtils;
      const app = utils.getApp();
      if (!app?.stage) return;
      const queue = [app.stage];
      while (queue.length) {
        const cur = queue.shift();
        const name = (cur.name ?? '').toLowerCase();
        if (['btn_ok','btn_close','btn_confirm','btn_continue','btn_accept'].includes(name)) {
          utils.triggerButton(cur);
        }
        for (const c of cur.children ?? []) queue.push(c);
      }
    });
    await page.waitForTimeout(500);

    console.log('[3/5] Setting bet to €1.00...');
    await page.waitForTimeout(1000);
    await setBet(page, '€1.00');
    await page.waitForTimeout(500);
    console.log('      Bet set.');

    console.log('[4/5] Checking balance...');
    const balanceBefore = await getBalance(page);
    console.log(`      Balance before: ${balanceBefore}`);

    console.log('[5/5] Clicking spin_button...');
    const spun = await clickContainer(page, 'spin_button');
    if (!spun) throw new Error('Failed to click spin_button');
    console.log('      Spin triggered!');

    await page.waitForTimeout(4000);

    const balanceAfter = await getBalance(page);
    console.log(`      Balance after:  ${balanceAfter}`);

    console.log('\n✓ TEST PASSED');
    await page.waitForTimeout(5000);
  } catch (err) {
    console.error('\n✗ TEST FAILED:', (err as Error).message);
    process.exitCode = 1;
  } finally {
    await context.close();
    console.log('Browser closed.');
  }
}

runTest();
