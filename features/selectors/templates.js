/**
 * @param {string} item name of the related item
 * @return {string} locator
 * */
const button = item => `input[type='submit'][value='${item}']`;

/**
 * @param {string} item name of the related item
 * @return {string} locator
 * */
const logInForm = item => `//div[./h1[text()='${item}']]`;

/**
 * @param {string} item name of the related item
 * @return {string} locator
 * */
const checkboxList = item => `//div[./h1[text()='${item}']]//div[contains(@class,'checkbox-list block')]`;

/**
 * @param {string} item name of the related item
 * @return {string} locator
 * */
const headerTitle = item => `//h1[text()='${item}']`;

/**
 * @param {string} item name of the related item
 * @return {string} locator
 * */
const formBlock = item => `//form[//legend[text()='${item}']]`;

/**
 * @param {string} sector name of the related sector
 * @param {string} item name of the related item
 * @return {string} locator
 * */
const browseFilter = (sector, item) => `//div[h4[text()='${sector}']]//em[@class="filter__parent-term" and text()='${item}']`;

module.exports = {
  button,
  logInForm,
  checkboxList,
  headerTitle,
  formBlock,
  browseFilter,
};
