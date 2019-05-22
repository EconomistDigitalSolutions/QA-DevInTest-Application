/**
 * @param {string} item name of the textbox
 * @return {string} locator
 * */
const footerLocator = (item) => `//*[contains(@class,'tertiary-nav__item')]//a[.='${item}']`;

/**
 * @param {string} item name of the textbox
 * @return {string} locator
 * */
const footerSocialLocator = (item) => `//*[contains(@class,'social-buttons__item--${item}')]`;

/**
 * @param {string} item name of the textbox
 * @return {string} locator
 * */
const pageModule = (item) => `//*[@class='main']//*[.='${item}']`;

/**
 * @param {string} item name of the textbox
 * @return {string} locator
 * */
const navigationLocator = (item) => `//*[@id='primary-nav']//*[contains(@class,'${item}')]`;

/**
 * @param {string} item name of the textbox
 * @return {string} locator
 * */
const navigationPageLocator = (item) => `//*[@class='main']//*[contains(text(),'${item}') and not (@class = 'hidden')]`;

/**
 * @param {string} item name of the textbox
 * @return {string} locator
 * */
const sectorHomePage = (item) => `//*[contains(@class,'facet-links')]//*[contains(text(),'${item}')]`;
module.exports = {
  footerLocator,
  footerSocialLocator,
  pageModule,
  navigationLocator,
  navigationPageLocator,
  sectorHomePage,
};