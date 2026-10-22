import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const routes = ['index.html', 'projects/index.html', '404.html'];
const pages = routes.map(route => [route, readFileSync(resolve('dist', route), 'utf8')]);

test('each static page has a title, description and accessible main landmark', () => {
  for (const [route, html] of pages) {
    assert.match(html, /<html lang="en">/, route);
    assert.match(html, /<title>[^<]+<\/title>/, route);
    assert.match(html, /<meta name="description" content="[^"]+"/, route);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, route);
    assert.match(html, /id="main-content"/, route);
  }
});

test('every local link resolves to a generated page and existing fragment', () => {
  for (const [route, html] of pages) {
    for (const [, href] of html.matchAll(/href="([^"?]+)"/g)) {
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      const [path, fragment] = href.split('#');
      const target = path ? resolve('dist', path.slice(1), path.endsWith('/') ? 'index.html' : '') : resolve('dist', route);
      assert.ok(existsSync(target), `${route}: missing ${href}`);
      if (fragment) assert.ok(readFileSync(target, 'utf8').includes(`id="${fragment}"`), `${route}: missing fragment ${href}`);
    }
  }
});

test('all projects expose source and documentation links', () => {
  const html = pages.find(([route]) => route === 'projects/index.html')[1];
  for (const slug of ['gentum-finance', 'safe-code', 'ticket-report-generator']) {
    const article = html.split(`id="${slug}"`)[1]?.split('</article>')[0];
    assert.ok(article, slug);
    assert.match(article, /href="https:\/\/github.com\/matheustecchio\/[^\"]+"[^>]*>Source /, slug);
    assert.match(article, />Docs /, slug);
  }
  assert.match(html, /Archived/);
});

test('external new-tab links protect the opener and images exist locally', () => {
  for (const [route, html] of pages) {
    for (const [tag] of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
      assert.match(tag, /rel="noopener noreferrer"/, route);
    }
    for (const [, src] of html.matchAll(/(?:src|srcset)="(\/images\/[^\"]+)"/g)) {
      assert.ok(existsSync(resolve('dist', src.slice(1))), `${route}: missing ${src}`);
    }
  }
});
