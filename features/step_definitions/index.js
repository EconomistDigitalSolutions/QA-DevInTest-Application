const { Given, Then, When } = require('cucumber');
const World = require('../support/world');

Given('I am on the homepage', async () => World.goToJobsPage())

Then('I expect to see page title {string}', async (string) => World.verifyPageTitle(string))

Then('I should see the section {string}', async (string) => World.verifySectionTitle(string))

Then('I should see the sector {string}', async (string) => World.verifySectorTitle(string))

When('I click the link text {string}', async (string) => World.clickTextLink(string))

When('the {string} is visible', async (string) => World.verifyElementExists(string))

When('I submit valid search with {string} and get relevant results', async (string) => World.submitValidSearch(string))

Then('the sign in form displayed', async () => World.verifySignInForm())

Then('the create account form displayed', async () => World.verifyCreateAccountForm())

Then('I try to log in with invalid credentials', async () => World.loginInvalid())