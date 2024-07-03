const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Functional Tests', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser(process.env.BROWSER).build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should open Google and search', async function() {
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    const title = await driver.getTitle();
    assert.match(title, /Selenium - Google Search/);
  });
});