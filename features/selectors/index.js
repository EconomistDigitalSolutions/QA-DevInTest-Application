const home = require('./home');
const signIn = require('./signIn');
const jobsBlog = require('./jobsBlog');
const searchRecruiters = require('./searchRecruiters');
const jobAlerts = require('./jobAlerts');
const findJob = require('./findJob');
const footer = require('./footer');
const header = require('./header');
const informational = require('./informational');
const recruiters = require('./recruiters');

module.exports = {
  ...home,
  ...signIn,
  ...jobsBlog,
  ...searchRecruiters,
  ...jobAlerts,
  ...findJob,
  ...footer,
  ...header,
  ...informational,
  ...recruiters,
};
