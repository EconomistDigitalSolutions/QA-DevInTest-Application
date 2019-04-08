const { By } = require('selenium-webdriver');
const BasePage = require('../page_objects/base_page');

class JobsPage extends BasePage {
  get searchForm() { return this.findByClassName('search__form'); }

  get keywordField() { return this.findByClassName('field--keyword'); }

  get locationField() { return this.findByClassName('field--location'); }

  get distanceField() { return this.findByClassName('field--radial-select'); }

  get sectorList() { return this.findByClassName('facet-links'); }

  // While featured jobs was scoped, it looks like scoping isn't
  // required as the class names are mostly using BEM.
  get sectorListItems() {
    return this.driver.findElements(By.className('facet-links__link'));
  }

  sectorNavItem(linkText) {
    return this.sectorList.findElement(By.linkText(linkText));
  }

  get jobsBlog() { return this.findByClassName('articles'); }

  get jobsBlogArticles() {
    return this.driver.findElements(By.className('articles__item'));
  }

  get featuredJobsBrick() { return this.findByClassName('featured-jobs'); }

  // As commented above, scoping doesn't seem to be necessary but leaving
  // this here as an example
  get featuredJobs() {
    return this.featuredJobsBrick
      .findElements(By.className('featured-jobs__item'));
  }
}

module.exports = JobsPage;
