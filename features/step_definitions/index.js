const { Given, Then, When } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');

Given(/^I am on the homepage$/, async () => World.goToJobsPage())

Then(/^I expect to see page title "([^"]*)"$/, async (string) => World.verifyPageTitle(string))

Then(/^I should see the section "([^"]*)"$/, async (string) => World.verifySectionTitle(string))

Then(/^I should see the sector {string}$/, async (string) => World.verifySectorTitle(string))

// Then('I should see sector {string}', async (string) => World.verifySectorTitle(string))

When(/^I click the link text "([^"]*)"$/, async (string) => World.clickTextLink(string))

When(/^the "([^"]*)" is visible$/, async (string) => World.verifyElementExists(string))
