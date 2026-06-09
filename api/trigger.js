module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { game_url } = req.body || {};
  if (!game_url) return res.status(400).json({ error: 'game_url is required' });

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'Server not configured' });

  const response = await fetch(
    'https://api.github.com/repos/AlexPinkQA/Auto-Test-Framework/actions/workflows/run-test.yml/dispatches',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ref: 'main', inputs: { game_url } }),
    }
  );

  if (response.status === 204) return res.status(200).json({ ok: true });
  const err = await response.json().catch(() => ({ message: 'Unknown error' }));
  return res.status(response.status).json({ error: err.message });
};
