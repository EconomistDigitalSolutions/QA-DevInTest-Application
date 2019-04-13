const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, Capabilities, By, until } = require('selenium-webdriver');
require('chromedriver');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

// A rush to tidy up the seatch terms from the edge cases, as the format of link text was more fussy
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  })
}

function buildDriver() {
  const chromeCapabilities = Capabilities.chrome();
  const chromeOptions = {
    args: ['incognito', 'window-size=1920,1080', 'headless', 'disable-gpu'],
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

  // This is where the Chai package came in useful, with it's assertion features 
  verifySectionTitle(sectionTitle) {
    return expect(this.driver.findElement(By.id('main')).getAttribute('innerHTML')).to.eventually.contain(sectionTitle);
  }

  // To verify pages, I am relying on page titles as the quick method
  verifySectorTitle(sectorTitle) {
    return this.driver.wait(until.titleIs(sectorTitle), 3000, 'Could not find correct page title');
  }

  // Most straight-forward method of clicking on text links.
  clickTextLink(text) {
    return this.driver.wait(until.elementLocated(By.partialLinkText(text)), 3000, 'Could not locate').click();
  }

  verifyElementExists(elementName) {
    return this.driver.wait(until.elementLocated(By.partialLinkText(elementName)), 3000, 'Could not locate').click();
  }

  verifySignInForm() {
    return this.driver.wait(until.elementsLocated(By.id('signinemail', 'signinpassword', 'rememberme')), 3000, 'Could not locate');
  }

  verifyCreateAccountForm() {
    return this.driver.wait(until.elementsLocated(By.id('title', 'firstname', 'lastname', 'emailaddress', 'regpassword', 'ConfirmPassword', 'rememberme-register', 'sitemarketing', 'prefertextemails', 'SendCvForReview', 'agreeTermsAndConds')), 3000, 'Could not locate');
  }

  // Could be nicer
  submitValidSearch(searchTerm) {
    const captialize = toTitleCase(searchTerm);
    this.driver.wait(until.elementLocated(By.id('keywords')), 3000, 'Could not locate keyword').sendKeys(searchTerm);
    this.driver.wait(until.elementLocated(By.id('location')), 3000, 'Could not locate location').sendKeys('London (Greater) (GB)');
    this.driver.wait(until.elementLocated(By.className('width-full')), 3000, 'Could not locate button').click();
    // Doing simple check on the links on page to check for search term (high probability its a job link)
    return this.driver.wait(until.elementLocated(By.partialLinkText(captialize)), 3000, 'Could not locate search results');
  }

   // Could be nicer
   loginInvalid() {
    this.driver.wait(until.elementLocated(By.id('signinemail')), 3000, 'Could not locate keyword').sendKeys('garbageemail@garbage.mail');
    this.driver.wait(until.elementLocated(By.id('signinemail')), 3000, 'Could not locate location').sendKeys('password');
    this.driver.wait(until.elementLocated(By.className('width-full')), 3000, 'Could not locate button').click();
    
    // Checking for the error message area being visible, rather than the text
    return this.driver.wait(until.elementLocated(By.id('message')), 3000, 'Could not locate search results');
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
