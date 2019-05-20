const { sprintf } = require('sprintf-js');

const footerLink = '//a[text()="%1$s"]';
const socialLink = '//*[contains(@class,"social-buttons__item--%1$s")]/a';

module.exports = {
  'footer': {
    selector: 'footer',
    type: 'tagName',
  },
  'about us': {
    selector: sprintf(footerLink, 'About Us'),
    type: 'xpath',
  },
  'contact us': {
    selector: sprintf(footerLink, 'Contact Us'),
    type: 'xpath',
  },
  'term and conditions': {
    selector: sprintf(footerLink, 'Terms & Conditions'),
    type: 'xpath',
  },
  'privacy policy': {
    selector: sprintf(footerLink, 'Privacy Policy'),
    type: 'xpath',
  },
  'advertise with us': {
    selector: sprintf(footerLink, 'Advertise with us'),
    type: 'xpath',
  },
  'facebook': {
    selector: sprintf(socialLink, 'fb'),
    type: 'xpath',
  },
  'twitter': {
    selector: sprintf(socialLink, 'tw'),
    type: 'xpath',
  },
  'linkedin': {
    selector: sprintf(socialLink, 'in'),
    type: 'xpath',
  },
};
