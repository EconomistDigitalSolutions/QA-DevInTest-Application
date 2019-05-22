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
   * Navigates to url
   * @returns {Promise<void>} A promise that will be resolved when the document
   *     has finished loading.
   */
  goToJobsPage() {
    return this.driver.get(BASE_URL);
  }

  /**
   * Calls buildDriver function
   */
  start() {
    this.driver = buildDriver();
  }
  /**
   * Closing instance of browser
   * @returns {Promise<void>} result of closing
   */
  async end() {
    await this.driver.close();
    return this.driver.quit();
  }

  /**
   * Waiting for page to load via receiving document.readyState property value and until no one active request will be in progress
   * @returns {Promise<void>} Error if page not load during default timeout
   */
  async waitPageLoad() {
    log('Waiting for page to load');
    await this.driver.wait( async () => {
      const readyState = await this.driver.executeScript('return document.readyState');
      return readyState === 'complete';
    },
    );
  }

  /**
   * Switch to the last window
   */
  async switchToLastWindow() {
    await this.refresh();
    await this.waitPageLoad();
    const windows = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(windows.pop());
  }

  /**
   * Refresh page
   */
  async refresh() {
    await this.driver.navigate().refresh();
  }

}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
