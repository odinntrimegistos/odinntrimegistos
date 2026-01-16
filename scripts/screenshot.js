const { chromium, devices } = require('playwright');
const fs = require('fs');

(async () => {
  const url = 'http://localhost:3000';
  await fs.promises.mkdir('screenshots', { recursive: true });

  // Desktop
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'screenshots/desktop.png', timeout: 60000 });
  await context.close();
  await browser.close();

  // Mobile (iPhone 12)
  const browser2 = await chromium.launch();
  const iPhone = devices['iPhone 12'];
  const context2 = await browser2.newContext({ ...iPhone });
  const page2 = await context2.newPage();
  await page2.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page2.waitForTimeout(1500);
  await page2.screenshot({ path: 'screenshots/mobile.png', timeout: 60000 });
  await context2.close();
  await browser2.close();

  console.log('Screenshots saved to screenshots/');
})().catch(err => { console.error(err); process.exit(1); });
