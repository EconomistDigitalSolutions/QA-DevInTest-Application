const { transformSelectors } = require('../../helpers/transformers');
const navigationBar = require('./navigationBar');
const home = require('./home');
const footer = require('./footer');
const jobs = require('./jobs');
const authorization = require('./authorization');
const pages = require('./pages');

module.exports = {
  ...transformSelectors(navigationBar),
  ...transformSelectors(home),
  ...transformSelectors(footer),
  ...transformSelectors(jobs),
  ...transformSelectors(authorization),
  ...transformSelectors(pages),
};
