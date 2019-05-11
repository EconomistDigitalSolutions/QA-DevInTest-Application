const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');
const log = require('../logger');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

/**
 * Creation instance of browser
 */
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
  /**
   * Navigate to url
   * @returns {!Promise<void>} A promise that will be resolved when the document has
   * finished loading.
   */
  goToJobsPage() {
    log(`Navigating to ${BASE_URL}`);
    return this.driver.get(BASE_URL);
  }

  /**
   * Calls buildDriver function
   */
  start() {
    log('Starting browser');
    this.driver = buildDriver();
  }

  /**
   * Closing instance of browser
   * @returns {Promise<void>} result of closing
   */
  async end() {
    log('Closing browser');
    await this.driver.close();
    return this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
