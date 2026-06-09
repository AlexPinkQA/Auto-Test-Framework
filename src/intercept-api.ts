import { chromium } from 'playwright';

async function selectDropdown(page: any, selectorEl: any, searchText: string): Promise<void> {
  await selectorEl.click();
  await page.keyboard.type(searchText);
  await page.waitForSelector('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option-content');
  const opts = await page.$$('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option-content');
  for (const opt of opts) {
    const t = await opt.textContent();
    if (t?.toLowerCase().includes(searchText.toLowerCase())) { await opt.click(); return; }
  }
  if (opts.length > 0) await opts[0].click();
}

async function run(): Promise<void> {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();

  page.on('request', req => {
    const url = req.url();
    const method = req.method();
    if (url.match(/\.(js|css|png|jpg|ico|woff|ttf|eot|svg)(\?|$)/)) return;
    if (method === 'GET' && !url.includes('/api/') && !url.includes('player') && !url.includes('session') && !url.includes('create') && !url.includes('balance') && !url.includes('launch')) return;
    console.log(`\n[REQ] ${method} ${url}`);
    const postData = req.postData();
    if (postData) console.log(`  BODY: ${postData}`);
    const headers = req.headers();
    for (const h of ['authorization', 'x-api-key', 'x-auth-token', 'cookie', 'content-type']) {
      if (headers[h]) console.log(`  ${h}: ${headers[h]}`);
    }
  });

  page.on('response', async res => {
    const url = res.url();
    if (url.match(/\.(js|css|png|jpg|ico|woff|ttf|eot|svg)(\?|$)/)) return;
    const ct = res.headers()['content-type'] || '';
    if (!ct.includes('json') && !url.includes('/api/') && !url.includes('player') && !url.includes('session') && !url.includes('balance') && !url.includes('launch')) return;
    let body = '';
    try { body = await res.text(); } catch {}
    if (!body) return;
    if (body.length > 2000) body = body.slice(0, 2000) + '…';
    console.log(`\n[RES] ${res.status()} ${url}`);
    console.log(`  BODY: ${body}`);
  });

  try {
    await page.goto('https://whitelabel.rubyplay.tech/');
    await page.waitForLoadState('networkidle', { timeout: 30000 });
    console.log('\n=== PAGE LOADED ===');

    const selectors = await page.$$('.ant-select-selector');
    await selectors[0].click();
    await page.waitForSelector('.ant-select-item-option-content');
    const envOptions = await page.$$('.ant-select-item-option-content');
    for (const opt of envOptions) {
      if ((await opt.textContent())?.trim().toLowerCase() === 'test') { await opt.click(); break; }
    }
    await page.waitForURL('**/game-launcher', { timeout: 15000 }).catch(() => {});
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    console.log('\n=== [1] Selected TEST ===');

    const customEl = await page.evaluateHandle(() => {
      const paths = document.querySelectorAll('svg path');
      for (const p of Array.from(paths)) {
        if (p.getAttribute('d')?.startsWith('M924.8 625.7')) {
          let el: Element | null = p;
          while (el && el.tagName !== 'BODY') {
            const parent = el.parentElement;
            if (parent && (parent.tagName === 'BUTTON' || parent.getAttribute('role') === 'button' ||
                parent.className?.toString().includes('btn') || parent.className?.toString().includes('launch'))) return parent;
            el = parent;
          }
        }
      }
      return null;
    });
    const box = await customEl.asElement()?.boundingBox();
    await page.mouse.click(box!.x + box!.width / 2, box!.y + box!.height / 2);
    await page.waitForSelector('.ant-modal-content', { timeout: 5000 });
    console.log('\n=== [2] Modal opened ===');

    await page.evaluate(() => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      let node: Element | null;
      while ((node = walker.nextNode() as Element)) {
        if (node.children.length === 0 && node.textContent?.trim() === 'Generate') {
          let el: Element | null = node;
          while (el && el.tagName !== 'BODY') {
            const cls = el.className?.toString() || '';
            if (cls.includes('btn') || el.tagName === 'BUTTON') { (el as HTMLElement).click(); return; }
            el = el.parentElement;
          }
          (node as HTMLElement).click(); return;
        }
      }
    });
    console.log('\n=== [3] Clicked Generate ===');

    const modalSelects = await page.$$('.ant-modal-content .ant-select-selector');
    await selectDropdown(page, modalSelects[0], 'EUR');
    console.log('\n=== [4] Selected EUR ===');

    await page.evaluate(() => {
      document.querySelectorAll('.ant-modal-footer *').forEach((el: Element) => {
        if (el.textContent?.trim() === 'Create') (el as HTMLElement).click();
      });
    });
    await page.waitForSelector('.balance-input', { timeout: 10000 });
    console.log('\n=== [5] Clicked Create ===');

    const paramSelects = await page.$$('.ant-select-selector');
    await selectDropdown(page, paramSelects[0], 'Development');
    console.log('\n=== [6a] Client env Development ===');
    await selectDropdown(page, paramSelects[2], 'mh_10008');
    console.log('\n=== [6b] Game mh_10008 ===');
    await selectDropdown(page, paramSelects[3], 'EN English');
    console.log('\n=== [6c] Language EN ===');

    await page.evaluate((bal: string) => {
      const input = document.querySelector('input.balance-input') as HTMLInputElement;
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      setter?.call(input, bal);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, '10001');
    await page.evaluate(() => { (document.querySelector('.set-balance-button') as HTMLElement)?.click(); });
    await page.waitForTimeout(2000);
    console.log('\n=== [7] Balance set ===');

    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el: Element) => {
        if (el.children.length === 0 && el.textContent?.trim() === 'Launch') (el as HTMLElement).click();
      });
    });
    await page.waitForTimeout(2000);
    console.log('\n=== [8] Clicked Launch ===');

    const pagesBefore = context.pages().length;
    await page.evaluate(() => {
      const paths = document.querySelectorAll('svg path');
      for (const p of Array.from(paths)) {
        if (p.getAttribute('d')?.startsWith('M18 13v6')) {
          let el: Element | null = p;
          while (el && el.tagName !== 'BODY') {
            el = el.parentElement;
            if (el && el instanceof HTMLElement) { el.click(); return; }
          }
          return;
        }
      }
    });
    let gameUrl = '';
    for (let i = 0; i < 20; i++) {
      await page.waitForTimeout(500);
      const pages = context.pages();
      if (pages.length > pagesBefore) {
        const newPage = pages[pages.length - 1];
        await newPage.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => {});
        gameUrl = newPage.url();
        break;
      }
    }
    console.log('\n=== FINAL GAME URL ===');
    console.log(gameUrl);
  } finally {
    await browser.close();
  }
}

run().catch(e => { console.error(e.message); process.exit(1); });
