const { Then } = require('cucumber');
const assert = require('assert');

const World = require('../support/world');
const { baseUrl } = World;

Then (/^I am taken to the path (.*)$/, async path => {
  const currentUrl = await World.driver.getCurrentUrl();
  
  const expectedUrl = /^http/.test(path)
    ? path
    : `${baseUrl}${path}`;
  
  assert.equal(currentUrl, expectedUrl, 'Was not taken to correct path');
});
