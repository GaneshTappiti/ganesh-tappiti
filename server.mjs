import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('./public', import.meta.url)));
const port = Number(process.env.PORT || 3000);
const types = {
  '.css': 'text/css; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.m4a': 'audio/mp4',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webm': 'video/webm',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end('Bad request');
    return;
  }
  if (pathname === '/') {
    res.writeHead(302, { Location: '/en' }).end();
    return;
  }
  const safePath = normalize(pathname).replace(/^([.][.][/\\])+/, '').replace(/^[/\\]+/, '');
  let target = resolve(join(root, safePath));
  if (!target.startsWith(root)) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  if (existsSync(target) && statSync(target).isDirectory()) target = join(target, 'index.html');
  if (!existsSync(target) || !statSync(target).isFile()) {
    const notFound = join(root, '404.html');
    if (existsSync(notFound)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      createReadStream(notFound).pipe(res);
      return;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
    return;
  }
  const ext = extname(target).toLowerCase();
  res.writeHead(200, {
    'Content-Type': types[ext] || 'application/octet-stream',
    'Cache-Control': ext === '.html' || ext === '.json' ? 'no-cache' : 'public, max-age=3600',
    'X-Content-Type-Options': 'nosniff',
  });
  createReadStream(target).pipe(res);
}).listen(port, '0.0.0.0', () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
