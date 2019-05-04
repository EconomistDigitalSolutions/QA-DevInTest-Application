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

module.exports = {
  button,
  logInForm,
  checkboxList,
};
