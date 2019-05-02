/**
 * @param {string} item name of the related item
 * @return {string} locator
 * */
const navigationBarLink = item => `//*[@class='primary-nav__link' and text()='${item}']`;

module.exports = {
  'Navigation bar': {
    id: 'primary-nav',
  },
  'Sign in': {
    linkText: 'Sign in',
  },
  'Create account': {
    linkText: 'Create account',
  },
  Home: {
    xpath: navigationBarLink('Home'),
  },
  'Find a job': {
    xpath: navigationBarLink('Find a job'),
  },
  'Job alerts': {
    xpath: navigationBarLink('Job alerts'),
  },
  'Search recruiters': {
    xpath: navigationBarLink('Search recruiters'),
  },
  'Jobs blog': {
    xpath: navigationBarLink('Jobs blog'),
  },
};
