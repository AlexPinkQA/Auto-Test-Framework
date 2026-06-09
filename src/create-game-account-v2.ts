import * as https from 'https';
import * as http from 'http';

// Server environment → API base URL
const SERVER_URLS: Record<string, string> = {
  'TEST':        'https://asia.test.rubyplay.io',
  'STAGE':       'https://asia.stage.rubyplay.io',
  'UAT':         'https://asia.uat.rubyplay.io',
  'DEVELOPMENT': 'https://asia.dev.rubyplay.io',
};

// Client environment → launcher base URL + operator
const CLIENT_ENVS: Record<string, { launcher: string; operator: string }> = {
  'TEST':        { launcher: 'https://test.rpl4y.com/launcher',    operator: 'test' },
  'DEVELOPMENT': { launcher: 'https://dev.rubyplay.com/launcher',  operator: 'test' },
  'UAT':         { launcher: 'https://uat.rpl4y.com/launcher',     operator: 'test' },
  'STAGE':       { launcher: 'https://stage.rpl4y.com/launcher',   operator: 'test' },
};

function request(url: string, method: string, body?: object): Promise<any> {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const payload = body ? JSON.stringify(body) : '';
    const options: https.RequestOptions = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };
    const lib = parsed.protocol === 'https:' ? https : http;
    const req = lib.request(options, res => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch { reject(new Error(`JSON parse error: ${data.slice(0, 200)}`)); }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function run(): Promise<void> {
  const SERVER_ENV  = (process.env.SERVER_ENV  || 'TEST').toUpperCase();
  const CLIENT_ENV  = (process.env.CLIENT_ENV  || 'DEVELOPMENT').toUpperCase();
  const CURRENCY    = process.env.CURRENCY     || 'EUR';
  const BALANCE     = parseFloat(process.env.BALANCE || '10000');
  const GAME        = process.env.GAME         || 'mh_10008';
  const LANG        = process.env.GAME_LANG     || 'en';

  const apiBase = SERVER_URLS[SERVER_ENV];
  if (!apiBase) {
    const known = Object.keys(SERVER_URLS).join(', ');
    throw new Error(`Unknown SERVER_ENV: "${SERVER_ENV}". Known: ${known}`);
  }

  const clientCfg = CLIENT_ENVS[CLIENT_ENV];
  if (!clientCfg) {
    const known = Object.keys(CLIENT_ENVS).join(', ');
    throw new Error(`Unknown CLIENT_ENV: "${CLIENT_ENV}". Known: ${known}`);
  }

  const username = `player${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;

  // Step 1: create player
  const player = await request(`${apiBase}/players-tf`, 'POST', {
    username,
    currencyCode: CURRENCY,
    balance: BALANCE,
  });
  if (!player.playerId) throw new Error(`Player creation failed: ${JSON.stringify(player)}`);

  // Step 2: create session
  const session = await request(`${apiBase}/players-tf/${player.playerId}/sessions`, 'POST', {
    gameId: 0,
    playerId: player.playerId,
  });
  if (!session.playerSession) throw new Error(`Session creation failed: ${JSON.stringify(session)}`);

  // Step 3: build launcher URL
  const params = new URLSearchParams({
    gamename:      GAME,
    operator:      clientCfg.operator,
    server_url:    apiBase,
    lang:          LANG,
    playerSession: session.playerSession,
  });

  const gameUrl = `${clientCfg.launcher}?${params.toString()}`;
  console.log(`Player ID:       ${player.playerId}`);
  console.log(`Game session ID: ${session.playerSession}`);
  console.log(`Game URL:        ${gameUrl}`);
}

run().catch(e => { console.error('Error:', e.message); process.exit(1); });
