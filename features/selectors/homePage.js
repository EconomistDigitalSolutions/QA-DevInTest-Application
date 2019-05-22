module.exports = {
  'Top bar': {
    selector: 'top-bar',
    type: 'id',
  },
  'Sign In Link': {
    selector: '//*[@id=\'top-bar\']//*[contains(text(),\'Sign in\')]',
    type: 'xpath',
  },
  'Create Account Link': {
    selector: '//*[@id=\'top-bar\']//*[contains(@class,\'create-account\')]',
    type: 'xpath',
  },
  'Sector': {
    selector: 'browse brick',
    type: 'className',
  },
  'Navigation bar': {
    selector: 'primary-nav',
    type: 'id',
  },
  'Footer': {
    selector: 'contentinfo',
    type: 'className',
  },
  'Featured jobs': {
    selector: 'featured-jobs brick',
    type: 'className',
  },
  'Jobs blog': {
    selector: 'articles brick',
    type: 'className',
  },
  'Search Keywords field': {
    selector: 'keywords',
    type: 'id',
  },
  'Search Location field': {
    selector: 'location',
    type: 'id',
  },
  'Search Distance drop-down': {
    selector: '//*[@id=\'RadialLocation\']',
    type: 'xpath',
  },
  'Search button': {
    selector: 'submit',
    type: 'className',
  },
  'Search block': {
    selector: 'browse brick',
    type: 'className',
  },

};