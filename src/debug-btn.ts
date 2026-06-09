import { DEFAULT_CONFIG, buildGameUrl } from './config';
import { launchWithDevTools, waitForContainer } from './utils/pixi';

async function debug() {
  const url = buildGameUrl(DEFAULT_CONFIG);
  const { context, page } = await launchWithDevTools();
  await page.goto(url);
  await page.waitForLoadState('load', { timeout: 30000 });
  await waitForContainer(page, 'btn_start', undefined, 60000);

  // Capture browser console
  page.on('console', msg => console.log('[browser]', msg.text()));

  const info = await page.evaluate(() => {
    const utils = (window as any).__pixiUtils;
    const app = utils.getApp();
    const btn = utils.findContainerByName(app.stage, 'btn_start');
    if (!btn) return { error: 'btn_start NOT FOUND' };

    const PIXI = (window as any).PIXI;
    const interaction = app?.renderer?.plugins?.interaction;

    // Inspect handler source and context keys
    const handlerInfo: any[] = [];
    for (const evName of ['pointerdown', 'pointerup']) {
      const entry = btn._events?.[evName];
      if (!entry) continue;
      const handlers = Array.isArray(entry) ? entry : [entry];
      for (const h of handlers) {
        const fn = h.fn ?? h;
        const ctx = h.context ?? btn;
        handlerInfo.push({
          ev: evName,
          fnSource: fn.toString().slice(0, 300),
          contextKeys: Object.keys(ctx).filter(k => !k.startsWith('_')).slice(0, 20),
          contextPrivateKeys: Object.keys(ctx).filter(k => k.startsWith('_') && !k.startsWith('__')).slice(0, 20),
        });
      }
    }

    // Check btn own methods/properties
    const btnOwnKeys = Object.keys(btn).filter(k => !k.startsWith('_')).slice(0, 30);
    const btnPrivateKeys = Object.keys(btn).filter(k => k.startsWith('_') && !k.startsWith('__')).slice(0, 20);
    const btnProtoMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(btn)).filter(k => k !== 'constructor').slice(0, 20);

    const results: any[] = [];

    // Call each event handler and log outcome
    for (const evName of ['pointerdown', 'pointerup', 'pointertap', 'click']) {
      const entry = btn._events?.[evName];
      if (!entry) { results.push({ ev: evName, status: 'no handler' }); continue; }
      const handlers = Array.isArray(entry) ? entry : [entry];
      for (const h of handlers) {
        const data = {
          pointerType: 'mouse', pointerId: 1, isPrimary: true,
          button: 0, buttons: 1,
          global: { x: 0, y: 0 },
          getLocalPosition: () => ({ x: 0, y: 0 }),
          originalEvent: { pointerType: 'mouse', pointerId: 1, button: 0, buttons: 1 },
        };
        const fakeEvent = {
          type: evName, target: btn, currentTarget: btn, data,
          pointerId: 1, pointerType: 'mouse', button: 0, buttons: 1, isPrimary: true,
          stopPropagation() {}, stopImmediatePropagation() {}, preventDefault() {},
          propagationStopped: false,
        };
        try {
          (h.fn ?? h).call(h.context ?? btn, fakeEvent);
          results.push({ ev: evName, status: 'ok' });
        } catch (e: any) {
          results.push({ ev: evName, status: 'error', msg: String(e) });
        }
      }
    }

    // Check btn_start visibility after calls
    const stillVisible = btn.visible !== false;
    const alpha = btn.alpha;

    // Check trackedPointers before/after
    const trackedBefore = JSON.stringify(btn.trackedPointers ?? {});

    // Simulate via interaction manager directly
    let interactionResult = 'n/a';
    if (interaction) {
      try {
        const bounds = btn.getBounds();
        const cx = bounds.x + bounds.width / 2;
        const cy = bounds.y + bounds.height / 2;

        // Build InteractionData the way PixiJS v6 does
        const InteractionData = (PIXI?.interaction?.InteractionData) ?? Object.getPrototypeOf(interaction.eventData?.data)?.constructor;
        const iData = new InteractionData();
        iData.identifier = 1;
        iData.pointerType = 'mouse';
        iData.button = 0;
        iData.buttons = 1;
        iData.isPrimary = true;
        iData.global.set(cx, cy);
        iData.originalEvent = { pointerId: 1, pointerType: 'mouse', button: 0, buttons: 1, clientX: cx, clientY: cy };

        const ev = interaction.eventData;
        ev.data = iData;
        ev.stopped = false;
        ev.stopPropagationHint = false;

        interaction.processPointerDown(ev, btn, true);
        interaction.processPointerUp(ev, btn, true);
        interactionResult = 'ok';
      } catch (e: any) {
        interactionResult = String(e);
      }
    }

    const trackedAfter = JSON.stringify(btn.trackedPointers ?? {});
    const stillVisibleAfter = btn.visible !== false;

    return {
      handlerInfo,
      btnOwnKeys,
      btnPrivateKeys,
      btnProtoMethods,
      trackedBefore,
      trackedAfter,
      interactionResult,
      stillVisibleAfter,
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await context.close();
}

debug().catch(console.error);
