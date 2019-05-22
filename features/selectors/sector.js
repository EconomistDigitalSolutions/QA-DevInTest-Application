const { sectorHomePage } = require('./templates');
module.exports = {
  'Banking and finance Link': {
    selector: sectorHomePage('Banking and finance'),
    type: 'xpath',
  },
  'Health Link': {
    selector: sectorHomePage('Health'),
    type: 'xpath',
  },
};