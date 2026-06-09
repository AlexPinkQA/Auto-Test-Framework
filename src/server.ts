import http from 'http';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const PORT = 3000;
let testRunning = false;
let lastStatus: 'idle' | 'running' | 'passed' | 'failed' = 'idle';

const HTML_PATH = path.resolve(__dirname, '../docs/index.html');
const PROJECT_ROOT = path.resolve(__dirname, '..');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  // Serve the HTML page
  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(HTML_PATH, 'utf8'));
    return;
  }

  // Poll status
  if (req.method === 'GET' && req.url === '/status') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: lastStatus }));
    return;
  }

  // Run test
  if (req.method === 'POST' && req.url === '/run') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { game_url } = JSON.parse(body);
        if (!game_url) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'game_url required' }));
          return;
        }
        if (testRunning) {
          res.writeHead(409, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Test already running' }));
          return;
        }

        testRunning = true;
        lastStatus = 'running';

        const proc = spawn('npx', ['ts-node', 'src/tests/spin.test.ts'], {
          env: { ...process.env, GAME_URL: game_url },
          cwd: PROJECT_ROOT,
          stdio: 'inherit',
        });

        proc.on('close', code => {
          testRunning = false;
          lastStatus = code === 0 ? 'passed' : 'failed';
          console.log(`\nTest finished with exit code ${code}`);
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(PORT, () => {
  console.log(`\n🎰 Auto Test Framework — Local Server`);
  console.log(`   Open: http://localhost:${PORT}\n`);
});
