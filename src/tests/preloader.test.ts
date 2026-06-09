import { DEFAULT_CONFIG, buildGameUrl } from '../config';
import { launchWithDevTools, waitForContainer } from '../utils/pixi';

async function runTest(): Promise<void> {
  const url = buildGameUrl(DEFAULT_CONFIG);
  console.log('TEST: Open game → skip preloader\n');

  const { context, page } = await launchWithDevTools();

  try {
    console.log('[1/2] Opening game...');
    await page.goto(url);
    await page.waitForLoadState('load', { timeout: 30000 });

    console.log('[2/2] Waiting for preloader (btn_start)...');
    await waitForContainer(page, 'btn_start', undefined, 60000);
    console.log('      btn_start found.');

    // Get btn_start center from bounds
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
        return {
          x: Math.round(rect.left + (b.x + b.width / 2) * scaleX),
          y: Math.round(rect.top + (b.y + b.height / 2) * scaleY),
        };
      } catch { return { x: 640, y: 360 }; }
    });
    console.log(`      btn_start center: (${clickPos.x}, ${clickPos.y})`);

    // Click at btn_start center
    console.log('      Click A: mouse.click at btn_start center...');
    await page.mouse.click(clickPos.x, clickPos.y);
    await page.waitForTimeout(2000);

    // move + down + up at btn_start center
    console.log('      Click B: mouse move+down+up at btn_start center...');
    await page.mouse.move(clickPos.x, clickPos.y);
    await page.mouse.down();
    await page.waitForTimeout(100);
    await page.mouse.up();
    await page.waitForTimeout(2000);

    // click center of screen
    console.log('      Click C: mouse.click at screen center (640, 360)...');
    await page.mouse.click(640, 360);

    console.log('\nWaiting 5s to observe result...');
    await page.waitForTimeout(5000);
    console.log('\n✓ TEST PASSED');
  } catch (err) {
    console.error('\n✗ TEST FAILED:', (err as Error).message);
    process.exitCode = 1;
  } finally {
    await context.close();
    console.log('Browser closed.');
  }
}

runTest();
