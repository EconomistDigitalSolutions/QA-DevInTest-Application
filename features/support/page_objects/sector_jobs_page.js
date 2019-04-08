const { By } = require('selenium-webdriver');
const BasePage = require('./base_page');

class SectorJobsPage extends BasePage {
  get sectorHeading() { return this.findById('browsing'); }

  get filter() { return this.findByClassName('filter__parent-term'); }

  get jobListings() {
    return this.driver.findElements(By.className('lister__item'));
  }

  get firstJobLink() { return this.findByClassName('lister__item'); }
}

module.exports = SectorJobsPage;
