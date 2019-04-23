const templates = require('./templates');

module.exports = {
  'Navigation Bar': {
    id: 'primary-nav',
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
  'Sign In Form': {
    xpath: templates.blockLocatorTemplate('Sign in'),
  },
  'Create Account Form': {
    xpath: templates.blockLocatorTemplate('Create an accounxt'),
  },
};
