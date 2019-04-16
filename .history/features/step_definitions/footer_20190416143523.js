const { Given, When, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const assert = require('assert');
const World = require('../support/world');
const driver = World.driver;

When('I click About us link', async() => {
    return await World.driver.findElement(By.linkText("About Us")).click();
  });

  Then('I should see About us page', async() => {
    return await World.driver.findElement({xpath: "//h1[contains(.,'About Us')]"}); 
  });

  When('I click contact us link', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('I should see Contact us page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
