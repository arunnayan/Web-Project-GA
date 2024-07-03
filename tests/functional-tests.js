const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Example Test', function() {
  this.timeout(30000);
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should open Google and check the title', async function() {
    await driver.get('http://www.google.com');
    const title = await driver.getTitle();
    expect(title).to.equal('Google');
  });
});