const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { expect } = require('chai');

describe('Example Test', function() {
  this.timeout(30000);
  let driver;

  before(async function() {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  after(async function() {
    if (driver) {
      await driver.quit();
    }
  });

  it('should open Google and check the title', async function() {
    await driver.get('http://www.google.com');
    const title = await driver.getTitle();
    expect(title).to.equal('Google');
  });
});