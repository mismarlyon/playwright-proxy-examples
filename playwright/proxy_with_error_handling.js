const { chromium } = require('playwright');

(async () => {
  let browser;

  try {
    browser = await chromium.launch({
      proxy: {
        server: 'http://PROXY_HOST:PORT',
        username: 'USERNAME',
        password: 'PASSWORD'
      }
    });

    const page = await browser.newPage();

    await page.goto('https://httpbin.org/ip', {
      timeout: 10000
    });

    const body = await page.textContent('body');
    console.log(body);

  } catch (error) {
    console.error('Proxy request failed:', error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
