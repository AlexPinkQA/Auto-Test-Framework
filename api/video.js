module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { run_id } = req.query;
  if (!run_id) return res.status(400).json({ error: 'run_id required' });

  const token = process.env.GITHUB_TOKEN;
  const OWNER = 'AlexPinkQA';
  const REPO = 'Auto-Test-Framework';

  const artifactsRes = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/actions/runs/${run_id}/artifacts`,
    { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' } }
  );
  const { artifacts } = await artifactsRes.json();
  const artifact = artifacts?.[0];
  if (!artifact) return res.status(404).json({ error: 'No artifacts found' });

  const downloadRes = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/actions/artifacts/${artifact.id}/zip`,
    { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' }, redirect: 'manual' }
  );

  const location = downloadRes.headers.get('location');
  if (!location) return res.status(500).json({ error: 'No download URL' });

  res.json({ url: location });
};
