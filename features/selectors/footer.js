const { footerLinkTemplate, footerSocialButtonTemplate } = require('./templates');

module.exports = {
  Footer: {
    tagName: 'footer',
  },
  'About Us Link': {
    xpath: footerLinkTemplate('About Us'),
  },
  'Contact Us Link': {
    xpath: footerLinkTemplate('Contact Us'),
  },
  'Terms And Conditions Link': {
    xpath: footerLinkTemplate('Terms & Conditions'),
  },
  'Privacy Policy Link': {
    xpath: footerLinkTemplate('Privacy Policy'),
  },
  'Advertise With Us Link': {
    xpath: footerLinkTemplate('Advertise with us'),
  },
  'Facebook Button': {
    xpath: footerSocialButtonTemplate('Facebook'),
  },
  'Twitter Button': {
    xpath: footerSocialButtonTemplate('Twitter'),
  },
  'Linkedin Button': {
    xpath: footerSocialButtonTemplate('LinkedIn'),
  },
};
