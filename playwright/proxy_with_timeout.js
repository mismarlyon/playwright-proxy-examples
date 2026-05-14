const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    proxy: {
      server: 'http://PROXY_HOST:PORT',
      username: 'USERNAME',
      password: 'PASSWORD'
    }
  });

  const page = await browser.newPage();

  try {
    await page.goto('https://httpbin.org/ip', {
      timeout: 10000
    });

    console.log(await page.textContent('body'));
  } catch (error) {
    console.error('Request failed or timed out:', error.message);
  }

  await browser.close();
})();
