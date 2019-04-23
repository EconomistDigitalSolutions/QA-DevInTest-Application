const blockLocatorTemplate = item => `//*[contains(@class,'grid-item') and contains(@class,'one-half') and contains(.,'${item}') and .//form[@action]]`;
const navigationLinkLocatorTemplate = item => `//*[@class='primary-nav__link' and text()='${item}']`;
const pageHeaderTemplate = item => `//*[@id='main']//h1[text()='${item}']`;

module.exports = {
  blockLocatorTemplate,
  navigationLinkLocatorTemplate,
  pageHeaderTemplate,
};
