const { navigationLinkTemplate } = require('./templates');

module.exports = {
  'Sign In Link': {
    linkText: 'Sign in',
  },
  'Create Account Link': {
    linkText: 'Create account',
  },
  'Navigation Bar': {
    id: 'primary-nav',
  },
  'Home Link': {
    xpath: navigationLinkTemplate('Home'),
  },
  'Find A Job Link': {
    xpath: navigationLinkTemplate('Find a job'),
  },
  'Job Alerts Link': {
    xpath: navigationLinkTemplate('Job alerts'),
  },
  'Search Recruiters Link': {
    xpath: navigationLinkTemplate('Search recruiters'),
  },
  'Jobs Blog Link': {
    xpath: navigationLinkTemplate('Jobs blog'),
  },
};
