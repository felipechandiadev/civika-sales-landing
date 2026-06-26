#!/usr/bin/env node
/**
 * Capture app screenshots in dark mode (Playwright).
 *
 * Prerequisites:
 *   pnpm dev:tunnel  (apps on :3001–:3006, core on :3000)
 *   pnpm add -D playwright && pnpm exec playwright install chromium
 *
 * Usage:
 *   node scripts/capture-screenshots.mjs
 *   USE_TUNNEL=1 node scripts/capture-screenshots.mjs
 */
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../public/screenshots');
const DEMO_PASSWORD = process.env.SCREENSHOT_PASSWORD ?? '098098';
const useTunnel = process.env.USE_TUNNEL === '1';
const tunnelDomain = process.env.CLOUDFLARE_TUNNEL_DOMAIN?.trim() || 'civika.sbs';

const THEME_KEY = 'vortice-color-scheme';

/** @type {{ id: string; host: string; port: number; username: string; path: string; viewport?: { width: number; height: number }; waitMs?: number }[]} */
const TARGETS = [
  {
    id: 'pulse',
    host: 'pulse',
    port: 3001,
    username: 'pulse',
    path: '/feed',
    viewport: { width: 390, height: 844 },
    waitMs: 3500,
  },
  {
    id: 'manager',
    host: 'manager',
    port: 3002,
    username: 'mngr',
    path: '/dashboard',
    waitMs: 3000,
  },
  {
    id: 'nexo',
    host: 'nexo',
    port: 3003,
    username: 'nexo',
    path: '/nexo',
    waitMs: 5000,
  },
  {
    id: 'sentinel',
    host: 'sentinel',
    port: 3004,
    username: 'sent',
    path: '/dashboard',
    waitMs: 3000,
  },
  {
    id: 'focus',
    host: 'focus',
    port: 3005,
    username: 'focus',
    path: '/focus',
    waitMs: 3000,
  },
  {
    id: 'vision',
    host: 'vision',
    port: 3006,
    username: 'vision',
    path: '/dashboard',
    waitMs: 4000,
  },
];

function originFor(target) {
  if (useTunnel) {
    return `https://${target.host}.${tunnelDomain}`;
  }
  return `http://localhost:${target.port}`;
}

async function applyDarkMode(page) {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.evaluate((key) => {
    localStorage.setItem(key, 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.style.colorScheme = 'dark';
    document.documentElement.classList.add('dark');
  }, THEME_KEY);
}

async function login(page, username) {
  await page.getByRole('textbox', { name: 'Usuario' }).fill(username);
  await page.locator('input[type="password"]').first().fill(DEMO_PASSWORD);
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
}

async function captureTarget(browser, target) {
  const origin = originFor(target);
  const viewport = target.viewport ?? { width: 1440, height: 900 };
  const context = await browser.newContext({
    viewport,
    colorScheme: 'dark',
    deviceScaleFactor: 2,
    ignoreHTTPSErrors: true,
  });

  await context.addInitScript((key) => {
    localStorage.setItem(key, 'dark');
  }, THEME_KEY);

  const page = await context.newPage();

  try {
    console.log(`Capturing ${target.id} (dark) from ${origin}${target.path}`);
    await page.goto(origin, { waitUntil: 'domcontentloaded', timeout: 90_000 });
    await applyDarkMode(page);

    const onLogin = await page.getByRole('textbox', { name: 'Usuario' }).isVisible().catch(() => false);
    if (onLogin) {
      await login(page, target.username);
      await page.waitForTimeout(2500);
    }

    await page.goto(`${origin}${target.path}`, {
      waitUntil: 'networkidle',
      timeout: 90_000,
    });
    await applyDarkMode(page);

    await page.waitForTimeout(target.waitMs ?? 3000);
    await page.screenshot({
      path: join(outDir, `${target.id}.png`),
      fullPage: false,
      animations: 'disabled',
    });
    console.log(`  → public/screenshots/${target.id}.png`);
  } catch (error) {
    console.warn(`  skip ${target.id}:`, error instanceof Error ? error.message : error);
  } finally {
    await context.close();
  }
}

async function runCaptures(browser) {
  for (const target of TARGETS) {
    await captureTarget(browser, target);
  }
}

async function main() {
  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    console.error('Install Playwright: pnpm add -D playwright && pnpm exec playwright install chromium');
    process.exit(1);
  }

  mkdirSync(outDir, { recursive: true });
  const launchOptions = { headless: true };
  try {
    const browser = await chromium.launch({ ...launchOptions, channel: 'chrome' });
    await runCaptures(browser);
    await browser.close();
    console.log('Done.');
    return;
  } catch {
    console.log('System Chrome unavailable, using Playwright Chromium…');
  }

  const browser = await chromium.launch(launchOptions);

  await runCaptures(browser);

  await browser.close();
  console.log('Done.');
}

main();
