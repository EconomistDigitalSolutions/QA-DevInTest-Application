const { By } = require('selenium-webdriver');
const BasePage = require('../page_objects/base_page');

class LogonPage extends BasePage {
  get emailInput() { return this.findById('signinemail'); }

  get passwordInput() { return this.findById('signinpassword'); }

  // Better identifier needed on the page
  get loginForm() { return this.driver.findElement(By.css('[action="/logon/"')); }

  // Better identifier needed on the page
  get signupForm() { return this.driver.findElement(By.css('[action="/register/"')); }
}

module.exports = LogonPage;
