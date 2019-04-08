const { By } = require('selenium-webdriver');

// I don't always like using base pages and often write a component
// class for something  that's common for all the pages not to
// pollute the page object "API" for a page
class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  get footer() {
    return this.driver.findElement(By.tagName('footer'));
  }

  findByClassName(className) {
    return this.driver.findElement(By.className(className));
  }
}

module.exports = BasePage;
