const home = require('./home');
const signIn = require('./signIn');
const jobsBlog = require('./jobsBlog');
const searchRecruiters = require('./searchRecruiters');
const jobAlerts = require('./jobAlerts');
const jobs = require('./jobs');
const footer = require('./footer');
const header = require('./header');
const informational = require('./informational');
const recruiters = require('./recruiters');
const jobDetails = require('./jobDetails');

module.exports = {
  ...home,
  ...signIn,
  ...jobsBlog,
  ...searchRecruiters,
  ...jobAlerts,
  ...jobs,
  ...footer,
  ...header,
  ...informational,
  ...recruiters,
  ...jobDetails,
};
