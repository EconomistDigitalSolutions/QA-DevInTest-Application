const { When, Then } = require('cucumber');
const { assert } = require('chai');
const selectors = require('../selectors');
const sectors = require('../../constants/sectors');
const { log } = require('../support/logger');
const { getRandomElement } = require('../support/helper');
const { findElement } = require('../support/baseElement');

/**
 * Checks that correct sector is specified in filter
 * @param {string} sector expected sector
 * This step executes the following actions:
 * 1. gets current value from sector field in filter
 * 2. checks that actual value is as expected
 */
Then(/^I should see selected sector is '(.*)'$/, async (sector) => {
  const element = await findElement(selectors['Filter Current Sector']);
  const currentSector = await element.getText();
  assert.equal(currentSector, sectors[sector], 'Current sector in filter is not correct');
});

/**
 * Clicks random job
 * This step executes the following actions:
 * 1. gets random job link
 * 2. logs the name of the chosen job
 * 3. clicks the job
 */
When(/^I click random job$/, async () => {
  const job = await getRandomElement(selectors['Job Item Block']);
  const jobNameElement = await job.findElement(selectors['Job Item Name Link']);
  const jobName = await jobNameElement.getText();
  log(`'${jobName}' job is clicked`);
  await jobNameElement.click();
});

/**
 * Checks that correct keywords are specified in filter
 * @param {string} keywords expected keywords
 * This step executes the following actions:
 * 1. gets current value from keywords field in filter
 * 2. checks that actual value is as expected
 */
Then(/^I should see keywords are '(.*)'$/, async (keywords) => {
  const element = await findElement(selectors['Filter Keywords']);
  const actual = await element.getAttribute('value');
  assert.equal(actual, keywords, 'Keywords in filter are not correct');
});

/**
 * Checks that correct country is specified in filter
 * @param {string} country expected country
 * This step executes the following actions:
 * 1. gets current value from location country field in filter
 * 2. checks that actual value is as expected
 */
Then(/^I should see location country is '(.*)'$/, async (country) => {
  const element = await findElement(selectors['Filter Location Country']);
  const actual = await element.getAttribute('value');
  assert.equal(actual, country, 'Location country in filter is not correct');
});

/**
 * Checks that correct location radial is specified in filter
 * @param {string} radial expected radial
 * This step executes the following actions:
 * 1. gets current value from location radial field in filter
 * 2. checks that actual value is as expected
 */
Then(/^I should see radial location is '(.*)'$/, async (radial) => {
  const element = await findElement(selectors['Filter Location Radial']);
  const actual = await element.getText();
  assert.equal(actual.trim(), radial, 'Radial location in filter is not correct');
});
