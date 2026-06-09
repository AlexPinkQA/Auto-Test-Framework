import { DEFAULT_CONFIG, buildGameUrl } from './config';
import { launchWithDevTools, waitForContainer } from './utils/pixi';

async function run() {
  const { context, page } = await launchWithDevTools();

  await page.goto(buildGameUrl(DEFAULT_CONFIG));
  await page.waitForLoadState('load', { timeout: 30000 });

  // Skip preloader
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

  // Scan all text nodes in the scene
  const texts = await page.evaluate(() => {
    const w = window as any;
    const app = w.__PIXI_APP__ || w.app || w.pixiApp || w.game?.app;
    if (!app?.stage) return [];

    const results: any[] = [];
    function traverse(node: any) {
      if (!node) return;
      const text = node.text ?? node._text ?? node.textContent;
      if (text !== undefined && text !== null && String(text).trim() !== '') {
        results.push({
          name: node.name ?? '',
          type: node.constructor?.name ?? '',
          text: String(text).trim(),
          visible: node.visible !== false,
        });
      }
      for (const child of node.children ?? []) traverse(child);
    }
    traverse(app.stage);
    return results.filter(n => n.visible);
  });

  console.log(`\nVisible text nodes (${texts.length}):`);
  texts.forEach((t: any) => console.log(`  [${t.name || t.type}] "${t.text}"`));

  await context.close();
}

run().catch(console.error);
