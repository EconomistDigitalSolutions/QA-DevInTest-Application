const { sprintf } = require('sprintf-js');

const pageTitle = '//*[text()="%1$s"]';

module.exports = {
  'home page': {
    selector: '//*[text()="Find a job on The Economist Jobs Board"]',
    type: 'xpath',
  },
  'find a job page': {
    selector: '//*[contains(@class,"filter-toggle__search")]',
    type: 'xpath',
  },
  'job alerts page': {
    selector: sprintf(pageTitle, 'Create a job alert'),
    type: 'xpath',
  },
  'search recruiters page': {
    selector: sprintf(pageTitle, 'Search recruiters'),
    type: 'xpath',
  },
  'jobs blog page': {
    selector: sprintf(pageTitle, 'Jobs blog'),
    type: 'xpath',
  },
  'about us page': {
    selector: sprintf(pageTitle, 'About Us'),
    type: 'xpath',
  },
  'contact us page': {
    selector: sprintf(pageTitle, 'Contact Us'),
    type: 'xpath',
  },
  'term and conditions page': {
    selector: sprintf(pageTitle, 'Terms & Conditions'),
    type: 'xpath',
  },
  'privacy policy page': {
    selector: sprintf(pageTitle, 'Privacy Policy'),
    type: 'xpath',
  },
  'advertise with us page': {
    selector: '//h1[contains(text(),"We\'ll help you to attract the very best talent")]',
    type: 'xpath',
  },
  'sign in page': {
    selector: sprintf(pageTitle, 'Sign in'),
    type: 'xpath',
  },
  'create account page': {
    selector: sprintf(pageTitle, 'Create an account'),
    type: 'xpath',
  },
};