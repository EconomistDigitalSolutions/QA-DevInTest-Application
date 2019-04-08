const { By } = require('selenium-webdriver');
const BasePage = require('../page_objects/base_page');

class LogonPage extends BasePage {
  get emailInput() { return this.findById('signinemail'); }

  get passwordInput() { return this.findById('signinpassword'); }

  get loginForm() { return this.driver.findElement(By.css('[action="/logon/"')); }

  get signupForm() { return this.driver.findElement(By.css('[action="/register/"')); }
}

module.exports = LogonPage;
