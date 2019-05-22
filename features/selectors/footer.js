const { footerLocator,
  footerSocialLocator,
  pageModule } = require('./templates');
module.exports = {
  'About Us Link': {
    selector: footerLocator('About Us'),
    type: 'xpath',
  },
  'About Us Page': {
    selector: pageModule('About Us'),
    type: 'xpath',
  },
  'Contact Us Link': {
    selector: footerLocator('Contact Us'),
    type: 'xpath',
  },
  'Contact Us Page': {
    selector: pageModule('Contact Us'),
    type: 'xpath',
  },
  'Terms & Conditions Link': {
    selector: footerLocator('Terms & Conditions'),
    type: 'xpath',
  },
  'Terms & Conditions Page': {
    selector: pageModule('Terms & Conditions'),
    type: 'xpath',
  },
  'Privacy Policy Link': {
    selector: footerLocator('Privacy Policy'),
    type: 'xpath',
  },
  'Privacy Policy Page': {
    selector: pageModule('Privacy Policy'),
    type: 'xpath',
  },
  'Advertise with us Link': {
    selector: footerLocator('Advertise with us'),
    type: 'xpath',
  },
  'Advertise with us Page': {
    selector: `//*[contains(@class,'recruiter-logos')]`,
    type: 'xpath',
  },
  'Facebook Link': {
    selector: footerSocialLocator ('fb'),
    type: 'xpath',
  },
  'Facebook': {
    selector: `pagelet_bluebar`,
    type: 'id',
  },
  'Twitter Link': {
    selector: footerSocialLocator ('tw'),
    type: 'xpath',
  },
  'Twitter': {
    selector: 'topbar js-topbar',
    type: 'className',
  },
  'Linkedin Link': {
    selector: footerSocialLocator ('in'),
    type: 'xpath',
  },
  'Linkedin': {
    selector: `nav`,
    type: 'className',
  },
};
