const { assert } = require('chai');
const { Then, When } = require('cucumber');
const World = require('../support/world');
const selectors = require('../constants/selectors');

/** Logs in
 * @param table table with credentials
 * This step performes the following actions:
 * 1. gets data from the table
 * 2. finds email field and populates with email data
 * 3. finds password field and populates with password data
 * 4. finds sign in data and clicks
 */
When(/^I log in as follows$/, async (table) => {
  const data = table.rowsHash();
  const email = await World.driver.findElement(selectors['email'].locator);
  await email.sendKeys(data.email);
  const password = await World.driver.findElement(selectors['password'].locator);
  await password.sendKeys(data.password);
  const signIn = await World.driver.findElement(selectors['sign in button'].locator);
  await signIn.click();
});

/** Checks reader logged in with expected name
 * @param table table with name
 * This step performes the following actions:
 * 1. gets data from the table
 * 2. finds name element
 * 4. checks that actual name is same as the expected one
 */
Then(/^I should be logged in with name$/, async (table) => {
  const data = table.rowsHash();
  const name = await World.driver.findElement(selectors['user name'].locator);
  assert.equal(await name.getText(), data.name, 'Name does not match');
});
