import puppeteer from 'puppeteer';

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36';

const launchOptions = {
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
};

const emulateOptions = {
  viewport: {
    width: 1024,
    height: 600,
  },
  userAgent: USER_AGENT,
};

export const crawl = async () => {
  const browser = await puppeteer.launch(launchOptions);

  const page = await browser.newPage();

  await page.emulate(emulateOptions);

  // await page.goTo(anywhere)
  // ..

  browser.close();
};
