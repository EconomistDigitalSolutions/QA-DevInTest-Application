const { navigationLinkLocatorTemplate } = require('./templates');

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
