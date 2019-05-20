const primaryNav = 'primary-nav';
const item = '__item--';

module.exports = {
  'navigation bar': {
    selector: primaryNav,
    type: 'id',
  },
  'sign in': {
    selector: '//a[text()="Sign in"]',
    type: 'xpath',
  },
  'create account': {
    selector: '//a[text()="Create account"]',
    type: 'xpath',
  },
  'home': {
    selector: `${primaryNav}${item}home`,
    type: 'className',
  },
  'find a job': {
    selector: `${primaryNav}${item}find-a-job`,
    type: 'className',
  },
  'job alerts': {
    selector: `${primaryNav}${item}jbe`,
    type: 'className',
  },
  'search recruiters': {
    selector: `${primaryNav}${item}recruiters`,
    type: 'className',
  },
  'jobs blog': {
    selector: `${primaryNav}${item}careers-advice`,
    type: 'className',
  },
  'user name': {
    selector: '//span[contains(@class,"user-nav")]',
    type: 'xpath',
  },
};
