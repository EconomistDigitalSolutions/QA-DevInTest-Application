const { button } = require('./templates');

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
  'Jobs blog section': {
    className: 'articles brick',
  },
  'Featured jobs': {
    className: 'featured-jobs brick',
  },
  Footer: {
    xpath: '//footer',
  },
  'Jobs by Sector': {
    className: 'browse brick',
  },
  'Banking and finance Sector': {
    linkText: 'Banking and finance',
  },
  'Business services Sector': {
    linkText: 'Business services',
  },
  'Government Sector': {
    linkText: 'Government',
  },
  'Academia Sector': {
    linkText: 'Academia',
  },
  'Primary and utility Sector': {
    linkText: 'Primary and utility',
  },
  'Charity Sector': {
    linkText: 'Charity',
  },
  'International public sector Sector': {
    linkText: 'International public sector',
  },
  'NGO Sector': {
    linkText: 'NGO',
  },
  'Consultancy Sector': {
    linkText: 'Consultancy',
  },
  'Development Sector': {
    linkText: 'Development',
  },
  'Health Sector': {
    linkText: 'Health',
  },
  'Humanitarian Sector': {
    linkText: 'Humanitarian',
  },
  'Other Sector': {
    linkText: 'Other',
  },
};
