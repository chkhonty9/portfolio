// Captures fresh screenshots of the live project sites into dist/images.
// Run with: pnpm screenshots
import { existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const sites = [
  { name: '8kit', url: 'https://8kit.io/' },
  { name: 'okeyo', url: 'https://okeyo.ma' },
  { name: 'pippipyalah', url: 'https://www.pippipyalah.ma/', height: 1640 },
  { name: 'carnet', url: 'https://carnet.be/' },
];
const width = 1440;
const defaultHeight = 2200; // taller than one screen so the cards can scroll through it on hover

const browserPaths = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
];
const executablePath = browserPaths.find((path) => path && existsSync(path));
if (!executablePath) throw new Error('No Chrome or Edge found. Set CHROME_PATH to your browser executable.');

const outDir = new URL('../dist/images/', import.meta.url);
mkdirSync(outDir, { recursive: true });

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const browser = await puppeteer.launch({ executablePath, defaultViewport: { width, height: 900, deviceScaleFactor: 1 } });

for (const { name, url, height = defaultHeight } of sites) {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  // Scroll down the page so lazy-loaded images appear, then go back to the top
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await wait(150);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await wait(2500);

  // Remove fixed-position cookie/consent banners so they don't cover the screenshot
  await page.evaluate(() => {
    document.querySelectorAll('body *').forEach((element) => {
      const { position } = getComputedStyle(element);
      if ((position === 'fixed' || position === 'sticky') && /cookie|consent|vie privée/i.test(element.textContent ?? '')) element.remove();
    });
  });

  await page.screenshot({
    path: fileURLToPath(new URL(`${name}.jpg`, outDir)),
    type: 'jpeg',
    quality: 80,
    clip: { x: 0, y: 0, width, height },
    captureBeyondViewport: true,
  });
  console.log(`Saved ${name}.jpg`);
  await page.close();
}

await browser.close();
