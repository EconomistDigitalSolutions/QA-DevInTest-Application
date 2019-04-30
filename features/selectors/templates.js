const signInCreateAccountFormTemplate = item => `//*[contains(@class,'grid-item') and contains(@class,'one-half') and contains(.,'${item}') and .//form[@action]]`;
const navigationLinkTemplate = item => `//*[@class='primary-nav__link' and text()='${item}']`;
const pageHeaderTemplate = item => `//*[@id='main']//h1[text()='${item}']`;
const footerLinkTemplate = item => `//footer//a[text()='${item}']`;
const footerSocialButtonTemplate = item => `//footer//a[contains(@class,'social-buttons') and contains(.,'${item}')]`;
const jobsHeaderTemplate = item => pageHeaderTemplate(`${item} jobs`);
const jobsSectorTemplate = item => `//*[@class='browse__items']//a[text()='${item}']`;

module.exports = {
  signInCreateAccountFormTemplate,
  navigationLinkTemplate,
  pageHeaderTemplate,
  footerLinkTemplate,
  footerSocialButtonTemplate,
  jobsHeaderTemplate,
  jobsSectorTemplate,
};
