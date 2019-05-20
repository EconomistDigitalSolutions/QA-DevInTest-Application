const sector = 'facet-links';
const link = '__link--';

module.exports = {
  'search fields': {
    selector: 'search brick',
    type: 'className',
  },
  'sector lists': {
    selector: sector,
    type: 'className',
  },
  'jobs blog article': {
    selector: '//h2[*[text()="Jobs blog"]]/following-sibling::*[@class="articles__items"]',
    type: 'xpath',
  },
  'featured jobs': {
    selector: '//section[contains(@class,"featured-jobs")]',
    type: 'xpath',
  },
  'sector items': {
    selector: `//li[contains(@class,"${sector}${link}")]/a`,
    type: 'xpath',
  },
};
