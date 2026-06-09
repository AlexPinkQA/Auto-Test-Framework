export interface GameConfig {
  gamename: string;
  operator: string;
  server_url: string;
  lang: string;
  playerSession?: string;
  extraParams?: Record<string, string>;
}

export const DEFAULT_CONFIG: GameConfig = {
  gamename: 'mh_10008',
  operator: 'test',
  server_url: 'https://asia.test.rubyplay.io',
  lang: 'en',
  playerSession: 'EUR-6a0741e3ab23d06657d60e',
};

export function configFromUrl(rawUrl: string): GameConfig {
  const u = new URL(rawUrl);
  return {
    gamename: u.searchParams.get('gamename') || DEFAULT_CONFIG.gamename,
    operator: u.searchParams.get('operator') || DEFAULT_CONFIG.operator,
    server_url: u.searchParams.get('server_url') || DEFAULT_CONFIG.server_url,
    lang: u.searchParams.get('lang') || DEFAULT_CONFIG.lang,
    playerSession: u.searchParams.get('playerSession') || DEFAULT_CONFIG.playerSession,
  };
}

export function getConfig(): GameConfig {
  return process.env.GAME_URL ? configFromUrl(process.env.GAME_URL) : DEFAULT_CONFIG;
}

export const BASE_URL = 'https://dev.rubyplay.com/launcher';

export function buildGameUrl(config: GameConfig): string {
  const params = new URLSearchParams({
    gamename: config.gamename,
    operator: config.operator,
    server_url: config.server_url,
    lang: config.lang,
    ...(config.playerSession ? { playerSession: config.playerSession } : {}),
    ...config.extraParams,
  });

  return `${BASE_URL}?${params.toString()}`;
}
