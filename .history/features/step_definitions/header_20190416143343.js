const { When, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');

When('I click sign in link', async() => {
    return await World.driver.findElement(By.linkText("Sign in")).click();
  });

  
  Then('I should see the sign in page', async function () {
    return await World.driver.findElement({xpath: "//h1[contains(.,'Sign in')]"}); 
  });

  When('I click create account link', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  
  Then('I should see the create account page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('I click home link', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  
  Then('I should see home page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });