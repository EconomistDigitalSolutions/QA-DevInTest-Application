const home = require('./home');
const signIn = require('./signIn');
const jobsBlog = require('./jobsBlog');
const searchRecruiters = require('./searchRecruiters');
const jobAlerts = require('./jobAlerts');
const findJob = require('./findJob');

module.exports = {
  ...home,
  ...signIn,
  ...jobsBlog,
  ...searchRecruiters,
  ...jobAlerts,
  ...findJob,
};
