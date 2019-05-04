const createAccount = require('./createAccount');
const header = require('./header');
const home = require('./home');
const signIn = require('./signIn');

module.exports = {
  ...createAccount,
  ...header,
  ...home,
  ...signIn,
};
