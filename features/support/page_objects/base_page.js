const { By } = require('selenium-webdriver');

// I don't always like using base pages and often write a component
// class for something  that's common for all the pages not to
// pollute the page object "API" for a page
class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  findById(id) {
    return this.driver.findElement(By.id(id));
  }

  findByClassName(className) {
    return this.driver.findElement(By.className(className));
  }

  get footer() {
    return this.driver.findElement(By.tagName('footer'));
  }

  get loginLink() {
    return this.findByClassName('jobseekers__item--sign-in');
  }

  get signupLink() {
    return this.findByClassName('jobseekers__item--create-account');
  }

  get topLevelNav() {
    return this.findById('primary-nav');
  }

  topLevelNavItem(linkText) {
    return this.topLevelNav.findElement(By.linkText(linkText));
  }
}

module.exports = BasePage;
