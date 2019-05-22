const { transformSelectors } = require('../support/helpers/transformers');
const footbar = require('./footer');
const logonPage = require('./logonPage');
const navigationBar = require('./navigationBar');
const sector = require('./sector');
const jobsPage = require ('./jobsPage');
const vacancy = require ('./vacancy');
const homePage = require('./homePage');
const registerPage = require('./registerPage');
module.exports = {
  ...transformSelectors(footbar),
  ...transformSelectors(logonPage),
  ...transformSelectors(navigationBar),
  ...transformSelectors(sector),
  ...transformSelectors(jobsPage),
  ...transformSelectors(vacancy),
  ...transformSelectors(homePage),
  ...transformSelectors(registerPage),
};

