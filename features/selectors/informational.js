const { pageHeaderTemplate } = require('./templates');

module.exports = {
  'About Us Header': {
    xpath: pageHeaderTemplate('About Us'),
  },
  'Contact Us Header': {
    xpath: pageHeaderTemplate('Contact Us'),
  },
  'Terms And Conditions Header': {
    xpath: pageHeaderTemplate('Terms & Conditions'),
  },
  'Privacy Policy Header': {
    xpath: pageHeaderTemplate('Privacy Policy'),
  },
};
