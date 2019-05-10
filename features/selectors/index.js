const paginator = require('./paginator');
const createAccount = require('./createAccount');
const header = require('./header');
const home = require('./home');
const signIn = require('./signIn');
const findJob = require('./findJob');
const jobAlerts = require('./jobAlerts');
const searchRecruiters = require('./searchRecruiters');
const jobsBlog = require('./jobsBlog');

module.exports = {
  ...paginator,
  ...createAccount,
  ...header,
  ...home,
  ...signIn,
  ...findJob,
  ...jobAlerts,
  ...searchRecruiters,
  ...jobsBlog,
};
