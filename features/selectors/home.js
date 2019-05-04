const { button } = require('../selectors/templates');

module.exports = {
  'Job title': {
    id: 'keywords',
  },
  Location: {
    id: 'location',
  },
  'Radial Location': {
    id: 'RadialLocation',
  },
  Search: {
    css: button('Search'),
  },
  'Jobs by Sector': {
    className: 'browse brick',
  },
  'Jobs blog': {
    className: 'articles brick',
  },
  'Featured jobs': {
    className: 'featured-jobs brick',
  },
  Footer: {
    xpath: '//footer',
  },
};
