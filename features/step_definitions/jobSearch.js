const { When, Then } = require('cucumber');
const { assert } = require('chai');
const {
  click, getAttribute, getText, setText,
} = require('../support/elements');
const log = require('../support/logger');
const selectors = require('../selectors');

When(/^I provide value '(.*)' for the '(.*)' field/, async (value, field) => setText(selectors[field], value));

When(/^I select value '(.*)' in the '(.*)' dropdown/, async (value, dropdown) => {
  click(selectors[dropdown]);
  await click({ xpath: `//option[contains(text(),'${value}')]` });
});

Then(/^'(.*)' in the '(.*)' textbox should be '(.*)'$/, async (attribute, field, value) => {
  const actual = await getAttribute(selectors[field], attribute);
  assert.equal(actual, value, `'${field}' value is not as expected`);
});

Then(/^distance '(.*)' in the '(.*)' dropdown should be '(.*)'$/, async (distance, field, attribute) => {
  const selector = { xpath: `${Object.values(selectors[field])}//option[@value=${distance}]` };
  const actual = await getAttribute(selector, attribute);
  assert.equal(actual, 'true', `'Within ${distance} miles' value is not selected`);
});

Then(/^the '(.*)' should include '(.*)'$/, async (element, value) => {
  const actual = await getText(selectors[element]);
  const array = value.split(',').map(v => v.trim());
  array.forEach((expected) => {
    assert.include(actual.toLowerCase(), expected.toLowerCase(), `'${element}' doesn't include '${expected}'`);
  });
});
