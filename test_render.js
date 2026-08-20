import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await browser.close();
})();
