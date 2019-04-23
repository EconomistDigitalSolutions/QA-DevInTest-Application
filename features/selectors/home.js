const { navigationLinkLocatorTemplate } = require('./templates');

module.exports = {
  'Navigation Bar': {
    id: 'primary-nav',
  },
  'Home Header': {
    className: 'home-header',
  },
  'Search Keywords Textbox': {
    id: 'keywords',
  },
  'Search Location Textbox': {
    id: 'location',
  },
  'Search Radial Location Dropdown': {
    id: 'RadialLocation',
  },
  'Search Button': {
    className: 'submit',
  },
  'Browse Jobs By Sector Block': {
    className: 'browse brick',
  },
  'Browse Jobs By Sector Link': {
    className: 'column__item',
  },
  'Jobs Blog Block': {
    className: 'articles brick',
  },
  'Featured Jobs Block': {
    className: 'featured-jobs brick',
  },
  'Featured Jobs Link': {
    className: 'featured-jobs__item',
  },
  Footer: {
    tagName: 'footer',
  },
  'Sign In Link': {
    linkText: 'Sign in',
  },
  'Create Account Link': {
    linkText: 'Create account',
  },
  'Home Link': {
    xpath: navigationLinkLocatorTemplate('Home'),
  },
  'Find A Job Link': {
    xpath: navigationLinkLocatorTemplate('Find a job'),
  },
  'Job Alerts Link': {
    xpath: navigationLinkLocatorTemplate('Job alerts'),
  },
  'Search Recruiters Link': {
    xpath: navigationLinkLocatorTemplate('Search recruiters'),
  },
  'Jobs Blog Link': {
    xpath: navigationLinkLocatorTemplate('Jobs blog'),
  },
};
