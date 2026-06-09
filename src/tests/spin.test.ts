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
    const loc = (window as any).__pixiLocator;
    const nodes = loc.findAll(loc.getApp().stage, (n: any) => n.name === name);
    const node = nodes.find((n: any) => n.worldVisible) ?? nodes[0];
    if (node) loc.clickNode(node);
  }, name);
  await page.waitForTimeout(200);
}

async function setBet(page: Page, target: string): Promise<void> {
  const toNum = (s: string) => parseFloat(s.replace(/[€,]/g, ''));
  let current = await getBet(page);
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
  const { context, page } = await launchWithDevTools(undefined, { dir: videosDir });

  try {
    console.log('[1/5] Opening game...');
    await page.goto(url);
    await page.waitForLoadState('load', { timeout: 30000 });

    console.log('[2/5] Waiting for preloader (btn_start)...');
    await waitForContainer(page, 'btn_start', undefined, 60000);
    console.log('      btn_start found — clicking...');
    await clickContainer(page, 'btn_start');
    console.log('      Preloader skipped.');

    console.log('[3/5] Setting bet to €1.00...');
    await waitForContainer(page, 'spin_button', undefined, 30000);
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
