const { When } = require('cucumber');
const selectors = require('../selectors');
const { log } = require('../support/logger');
const { getRandomElement } = require('../support/helper');

/**
 * Clicks random sector
 * This step executes the following actions:
 * 1. selects random sector link
 * 2. logs the name of chosen sector
 * 3. clicks the sector link
 */
When(/^I click random sector$/, async () => {
  const sector = await getRandomElement(selectors['Browse Jobs By Sector Link']);
  const sectorName = await sector.getText();
  log(`'${sectorName}' sector is clicked`);
  await sector.click();
});
