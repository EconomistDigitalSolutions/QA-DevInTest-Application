const { When, Then } = require('cucumber');
const { assert } = require('chai');
const {
  click, getAttribute, getText, setText,
} = require('../support/elements');
const selectors = require('../selectors');

/**
 * Sets text into the field
 * @param {string} value value that will be set into the field
 * @param {string} field field where the value will be set
 * This step executes the following actions:
 * 1. sets text into the field
 */
When(/^I provide value '(.*)' for the '(.*)' field/, async (value, field) => setText(selectors[field], value));

/**
 * Selects value from dropdown
 * @param {string} value a value that will be set into the field
 * @param {string} dropdown a dropdown where the value will be selected
 * This step executes the following actions:
 * 1. clicks on the dropdown
 * 2. selects the value from there
 */
When(/^I select value '(.*)' in the '(.*)' dropdown/, async (value, dropdown) => {
  click(selectors[dropdown]);
  await click({ xpath: `//option[contains(text(),'${value}')]` });
});

/**
 * Checks that value in the textbox is as expected
 * @param {string} attribute an attribute of the page element to be checked
 * @param {string} field a field where the value should be checked
 * @param {string} value an expected value
 * This step executes the following actions:
 * 1. gets an actual value from the textbox
 * 2. compares expected and actual value and throws an error in case of failure
 */
Then(/^'(.*)' in the '(.*)' textbox should be '(.*)'$/, async (attribute, field, value) => {
  const actual = await getAttribute(selectors[field], attribute);
  assert.equal(actual, value, `'${field}' value is not as expected`);
});

/**
 * Checks that value in the dropdown is as expected
 * @param {string} value an expected value
 * @param {string} dropdown a dropdown where the value should be checked
 * @param {string} attribute an attribute of the page element to be checked
 * This step executes the following actions:
 * 1. gets an actual selected value from the dropdown
 * 2. compares expected and actual value and throws an error in case of failure
 */
Then(/^value '(.*)' in the '(.*)' dropdown should be '(.*)'$/, async (value, dropdown, attribute) => {
  const selector = { xpath: `${Object.values(selectors[dropdown])}//option[@value=${value}]` };
  const actual = await getAttribute(selector, attribute);
  assert.equal(actual, 'true', `'Within ${value} miles' value is not selected`);
});

/**
 * Checks that search result is correct
 * @param {string} value an expected value
 * @param {string} element an element to be checked
 * This step executes the following actions:
 * 1. gets text from the element
 * 2. slits array with expected keywords in case there are more than one word there
 * 3. checks that the actual text has each keyword included
 */
Then(/^the '(.*)' should include '(.*)'$/, async (element, value) => {
  const actual = await getText(selectors[element]);
  const array = value.split(',').map(v => v.trim());
  array.forEach((expected) => {
    assert.include(actual.toLowerCase(), expected.toLowerCase(), `'${element}' doesn't include '${expected}'`);
  });
});
