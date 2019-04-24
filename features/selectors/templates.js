const blockLocatorTemplate = item => `//*[contains(@class,'grid-item') and contains(@class,'one-half') and contains(.,'${item}') and .//form[@action]]`;
const navigationLinkLocatorTemplate = item => `//*[@class='primary-nav__link' and text()='${item}']`;
const pageHeaderTemplate = item => `//*[@id='main']//h1[text()='${item}']`;
const footerLinkTemplate = item => `//footer//a[text()='${item}']`;
const footerSocialButtonTemplate = item => `//footer//a[contains(@class,'social-buttons') and contains(.,'${item}')]`;

module.exports = {
  blockLocatorTemplate,
  navigationLinkLocatorTemplate,
  pageHeaderTemplate,
  footerLinkTemplate,
  footerSocialButtonTemplate,
};
