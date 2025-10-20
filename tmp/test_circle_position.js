const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the page
  await page.goto('http://localhost:3003');

  // Wait for animations to settle
  await page.waitForTimeout(2000);

  // Take a screenshot
  await page.screenshot({
    path: '/Users/b.woldai/1programm_code/claude-code/dias/dias-platform/tmp/screenshot_circle_centered.png',
    fullPage: false
  });

  console.log('Screenshot saved to tmp/screenshot_circle_centered.png');

  await browser.close();
})();
