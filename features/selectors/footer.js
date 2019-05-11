/**
 * @param {string} item name of the related item
 * @return {string} locator
 * */
const socialMedia = item => `//a[contains(@class,'social-buttons') and @data-icon='${item}']`;

module.exports = {
  'About Us link': {
    linkText: 'About Us',
  },
  'Contact Us link': {
    linkText: 'Contact Us',
  },
  'Terms & Conditions link': {
    linkText: 'Terms & Conditions',
  },
  'Privacy Policy link': {
    linkText: 'Privacy Policy',
  },
  'Advertise with us link': {
    linkText: 'Advertise with us',
  },
  'Facebook link': {
    xpath: socialMedia('F'),
  },
  'Twitter link': {
    xpath: socialMedia('T'),
  },
  'Linkedin link': {
    xpath: socialMedia('L'),
  },
  'Madgex Job Board Solutions link': {
    linkText: 'Madgex Job Board Solutions',
  },
};
