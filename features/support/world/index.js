const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

/**
 * Builds the web driver
 * @returns {ThenableWebDriver} The web driver used for the tests
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

/**
 * World environment for tests
 */
class CustomWorld {
  /**
   * Navigates to the Jobs page
   * @returns {Promise<any|Error>} Whether or not the navigation has resolved
   */
  goToJobsPage() {
    return this.driver.get(BASE_URL);
  }

  /**
   * Starts the world
   * @param {string} testFileNameTemplate The name of the video file
   */
  start() {
    this.driver = buildDriver();
  }

  /**
   * Exits the world by closing the browser and quitting the process
   * @returns {Promise<any>} Whether or not the world exits
   */
  async end() {
    await this.driver.close();
    return this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
