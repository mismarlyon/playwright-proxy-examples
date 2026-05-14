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

  await page.goto('https://httpbin.org/ip');

  console.log(await page.textContent('body'));

  await browser.close();
})();
