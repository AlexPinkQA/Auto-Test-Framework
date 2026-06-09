import { DEFAULT_CONFIG, buildGameUrl } from './config';
import { launchWithDevTools, waitForContainer } from './utils/pixi';

async function getBet(page: any): Promise<string | null> {
  return page.evaluate(() => {
    const w = window as any;
    const app = w.__PIXI_APP__ || w.app || w.pixiApp || w.game?.app;
    if (!app?.stage) return null;
    function find(node: any, name: string): any {
      if (!node) return null;
      if (node.name === name) return node;
      for (const c of node.children ?? []) { const f = find(c, name); if (f) return f; }
      return null;
    }
    // Find the TOTAL BET value — it's a Text15 sibling after the "TOTAL BET" label
    // Scan all visible texts and return the one right after "TOTAL BET"
    const texts: { name: string; text: string }[] = [];
    function scanText(node: any) {
      if (!node || node.visible === false) return;
      const t = node.text ?? node._text;
      if (t !== undefined && t !== null && String(t).trim()) {
        texts.push({ name: node.name ?? '', text: String(t).trim() });
      }
      for (const c of node.children ?? []) scanText(c);
    }
    scanText(app.stage);
    const idx = texts.findIndex(t => t.text === 'TOTAL BET');
    return idx >= 0 ? texts[idx + 1]?.text ?? null : null;
  });
}


async function clickButton(page: any, name: string): Promise<void> {
  const ok = await page.evaluate((name: string) => {
    const loc = (window as any).__pixiLocator;
    if (!loc) return false;
    const app = loc.getApp();
    if (!app?.stage) return false;
    const nodes = loc.findAll(app.stage, (n: any) => n.name === name);
    // Prefer world-visible node
    const node = nodes.find((n: any) => n.worldVisible) ?? nodes[0];
    if (!node) return false;
    return loc.clickNode(node);
  }, name);
  if (!ok) console.log(`  ${name} not found`);
  await page.waitForTimeout(300);
}

async function run() {
  const { context, page } = await launchWithDevTools();
  await page.goto(buildGameUrl(DEFAULT_CONFIG));
  await page.waitForLoadState('load', { timeout: 30000 });

  // Skip preloader
  console.log('Skipping preloader...');
  await waitForContainer(page, 'btn_start', undefined, 60000);
  await page.mouse.click(640, 676);
  await page.waitForTimeout(2000);
  await page.mouse.move(640, 676);
  await page.mouse.down();
  await page.waitForTimeout(100);
  await page.mouse.up();
  await page.waitForTimeout(2000);
  await page.mouse.click(640, 360);
  await page.waitForTimeout(3000);

  const currentBet = await getBet(page);
  console.log(`\nCurrent bet: ${currentBet}`);

  // Wait for game to be fully interactive
  await page.waitForTimeout(2000);

  // Click + until max
  console.log('\nClicking btn_plus...');
  const bets = new Set<string>();
  if (currentBet) bets.add(currentBet);
  let prev = currentBet;
  for (let i = 0; i < 20; i++) {
    await clickButton(page, 'btn_plus');
    const bet = await getBet(page);
    if (bet) bets.add(bet);
    if (bet === prev) { console.log('  (max reached)'); break; }
    console.log(`  + → ${bet}`);
    prev = bet;
  }

  // Click - until min
  console.log('\nClicking btn_minus...');
  prev = await getBet(page);
  for (let i = 0; i < 20; i++) {
    await clickButton(page, 'btn_minus');
    const bet = await getBet(page);
    if (bet) bets.add(bet);
    if (bet === prev) { console.log('  (min reached)'); break; }
    console.log(`  - → ${bet}`);
    prev = bet;
  }

  console.log('\nAll available bets:');
  // Sort by numeric value
  const sorted = [...bets].sort((a, b) => parseFloat(a.replace(/[€,]/g, '')) - parseFloat(b.replace(/[€,]/g, '')));
  sorted.forEach(b => console.log(`  ${b}`));

  await page.waitForTimeout(3000);
  await context.close();
}

run().catch(console.error);
