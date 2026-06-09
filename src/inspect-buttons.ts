import { chromium } from 'playwright';
import { DEFAULT_CONFIG, buildGameUrl } from './config';
import * as fs from 'fs';
import * as path from 'path';

async function inspectButtons(): Promise<void> {
  const url = buildGameUrl(DEFAULT_CONFIG);
  console.log(`Opening: ${url}\n`);

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();

  await page.goto(url);

  // Wait for the game canvas or main content to appear
  console.log('Waiting for game to load...');
  await page.waitForLoadState('load', { timeout: 30000 });
  await page.waitForTimeout(12000); // extra time for game engine to init

  // Screenshot
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);
  const screenshotPath = path.join(screenshotsDir, 'game-loaded.png');
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`Screenshot saved: ${screenshotPath}\n`);

  // Find all interactive elements
  const elements = await page.evaluate(() => {
    const selectors = [
      'button',
      '[role="button"]',
      'input[type="button"]',
      'input[type="submit"]',
      'a[href]',
      '[class*="btn"]',
      '[class*="button"]',
      '[class*="spin"]',
      '[class*="bet"]',
      '[class*="menu"]',
      '[class*="close"]',
      '[class*="info"]',
      '[class*="sound"]',
      '[class*="turbo"]',
      '[class*="auto"]',
      '[class*="max"]',
    ];

    const found: Array<{
      tag: string;
      type: string | null;
      id: string;
      classes: string;
      text: string;
      ariaLabel: string | null;
      visible: boolean;
      rect: { x: number; y: number; width: number; height: number };
    }> = [];

    const seen = new Set<Element>();

    for (const selector of selectors) {
      const els = document.querySelectorAll(selector);
      els.forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);

        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return; // skip invisible

        found.push({
          tag: el.tagName.toLowerCase(),
          type: el.getAttribute('type'),
          id: el.id,
          classes: el.className,
          text: (el.textContent || '').trim().slice(0, 60),
          ariaLabel: el.getAttribute('aria-label'),
          visible: rect.width > 0 && rect.height > 0,
          rect: { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) },
        });
      });
    }

    return found;
  });

  if (elements.length === 0) {
    console.log('No standard HTML buttons found. Game likely uses Canvas rendering.');
    console.log('Check the screenshot to see current game state.');
  } else {
    console.log(`Found ${elements.length} interactive elements:\n`);
    elements.forEach((el, i) => {
      const label = el.ariaLabel || el.text || el.id || el.classes.split(' ')[0] || '(no label)';
      console.log(`[${i + 1}] <${el.tag}> "${label}"`);
      console.log(`     id="${el.id}" class="${el.classes.slice(0, 50)}"`);
      console.log(`     position: x=${el.rect.x} y=${el.rect.y} size=${el.rect.width}x${el.rect.height}`);
      console.log();
    });
  }

  // Also check for canvas (most slot games render via WebGL/Canvas)
  const canvasInfo = await page.evaluate(() => {
    const canvases = document.querySelectorAll('canvas');
    return Array.from(canvases).map((c) => ({
      id: c.id,
      classes: c.className,
      width: c.width,
      height: c.height,
      rect: (() => {
        const r = c.getBoundingClientRect();
        return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) };
      })(),
    }));
  });

  if (canvasInfo.length > 0) {
    console.log(`\nCanvas elements found (game likely renders via WebGL/Canvas):`);
    canvasInfo.forEach((c) => {
      console.log(`  <canvas id="${c.id}" class="${c.classes}" size=${c.width}x${c.height} at x=${c.rect.x} y=${c.rect.y}>`);
    });
    console.log('\nFor canvas-based games, buttons are rendered inside canvas.');
    console.log('Use screenshot + coordinates to identify click zones.');
  }

  await browser.close();
  console.log('\nBrowser closed.');
}

inspectButtons().catch(console.error);
