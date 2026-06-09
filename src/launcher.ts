import { chromium } from 'playwright';
import { DEFAULT_CONFIG, buildGameUrl, GameConfig } from './config';

async function launchGame(overrides: Partial<GameConfig> = {}): Promise<void> {
  const config: GameConfig = { ...DEFAULT_CONFIG, ...overrides };
  const url = buildGameUrl(config);

  console.log(`Opening game: ${config.gamename}`);
  console.log(`URL: ${url}`);

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  const page = await context.newPage();

  await page.goto(url);
  console.log('Game launched. Press Ctrl+C to close.');
  await new Promise((_, reject) => process.once('SIGINT', reject));
  await browser.close();
  console.log('Browser closed.');
}

// Parse CLI args: --gamename=mh_10008 --lang=uk etc.
function parseArgs(): Partial<GameConfig> {
  const overrides: Partial<GameConfig> & { extraParams?: Record<string, string> } = {};
  const extra: Record<string, string> = {};

  const knownKeys = new Set(['gamename', 'operator', 'server_url', 'lang', 'playerSession']);

  for (const arg of process.argv.slice(2)) {
    const match = arg.match(/^--([^=]+)=(.+)$/);
    if (!match) continue;
    const [, key, value] = match;

    if (knownKeys.has(key)) {
      (overrides as Record<string, string>)[key] = value;
    } else {
      extra[key] = value;
    }
  }

  if (Object.keys(extra).length > 0) overrides.extraParams = extra;
  return overrides;
}

launchGame(parseArgs()).catch(console.error);
