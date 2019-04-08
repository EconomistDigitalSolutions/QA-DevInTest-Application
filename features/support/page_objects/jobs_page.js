const { By } = require('selenium-webdriver');

class JobsPage {
  constructor(driver) {
    this.driver = driver;
  }

  // This and similar methods should go into a base class
  findByClassName(className) {
    return this.driver.findElement(By.className(className));
  }

  get searchForm() { return this.findByClassName('search__form'); }

  get keywordField() { return this.findByClassName('field--keyword'); }

  get locationField() { return this.findByClassName('field--location'); }

  get distanceField() { return this.findByClassName('field--radial-select'); }
}

module.exports = JobsPage;
