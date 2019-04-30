const { jobsSectorTemplate } = require('./templates');
const sector = require('../../constants/sectors');

module.exports = {
  'Home Header': {
    className: 'home-header',
  },
  'Search Keywords Textbox': {
    id: 'keywords',
  },
  'Search Location Textbox': {
    id: 'location',
  },
  'Search Location Hint': {
    xpath: '//*[@class=\'autocomplete-suggestions\' and not(contains(@style,\'display: none\'))]//*[@class=\'autocomplete-suggestion\']',
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
    xpath: '//*[contains(@class,\'column__item\')]//a',
  },
  'Banking And Finance Sector Link': {
    xpath: jobsSectorTemplate(sector['Banking And Finance']),
  },
  'Government Sector Link': {
    xpath: jobsSectorTemplate(sector.Government),
  },
  'Academia Sector Link': {
    xpath: jobsSectorTemplate(sector.Academia),
  },
  'Primary And Utility Sector Link': {
    xpath: jobsSectorTemplate(sector['Primary And Utility']),
  },
  'Charity Sector Link': {
    xpath: jobsSectorTemplate(sector.Charity),
  },
  'International Public Sector Sector Link': {
    xpath: jobsSectorTemplate(sector['International Public Sector']),
  },
  'NGO Sector Link': {
    xpath: jobsSectorTemplate(sector.NGO),
  },
  'Consultancy Sector Link': {
    xpath: jobsSectorTemplate(sector.Consultancy),
  },
  'Development Sector Link': {
    xpath: jobsSectorTemplate(sector.Development),
  },
  'Health Sector Link': {
    xpath: jobsSectorTemplate(sector.Health),
  },
  'Humanitarian Sector Link': {
    xpath: jobsSectorTemplate(sector.Humanitarian),
  },
  'Other Sector Link': {
    xpath: jobsSectorTemplate(sector.Other),
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
};
