const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

function buildDriver() {
  const chromeCapabilities = Capabilities.chrome();
  const chromeOptions = {
    args: ['incognito', 'window-size=1920,1080'],
  };

  chromeCapabilities.set('chromeOptions', chromeOptions);

  return new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
}

class CustomWorld {
  goToJobsPage() {
    return this.driver.get(BASE_URL);
  }

  verifyPageTitle(pageTitle) {
    return this.driver.wait(until.titleIs(pageTitle), 3000, 'Could not find correct page title');
  }

  verifySectionTitle(sectionTitle) {
    return this.driver.wait(until.titleIs(sectionTitle), 3000, 'Could not find correct section page title');
  }

  verifySectorTitle(sectorTitle) {
    return this.driver.wait(until.titleIs(sectorTitle), 3000, 'Could not find correct sector page title');
  }

  clickTextLink(text) {
    return this.driver.wait(until.elementLocated(By.partialLinkText(text)), 3000, 'Could not locate').click();
  }

  verifyElementExists(elementName) {
    return this.driver.wait(until.elementLocated(By.partialLinkText(elementName)), 3000, 'Could not locate').click();
  }

  start() {
    this.driver = buildDriver();
  }

  async end() {
    await this.driver.close();
    return this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
