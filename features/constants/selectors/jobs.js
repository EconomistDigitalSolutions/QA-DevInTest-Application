const jobHeader = '//*[@class="lister__header"]';

module.exports = {
  'search': {
    selector: '//*[@type="submit" and @value="Search"]',
    type: 'xpath',
  },
  'search tab': {
    selector: '//*[@href="/searchjobs/"]',
    type: 'xpath',
  },
  'browsing': {
    selector: 'browsing',
    type: 'id',
  },
  'job header text': {
    selector: `${jobHeader}//span`,
    type: 'xpath',
  },
  'job header link': {
    selector: `${jobHeader}/a`,
    type: 'xpath',
  },
  'job description': {
    selector: 'job-description',
    type: 'className',
  },
  'filter category': {
    selector: '//*[contains(@class,"category-header") and contains(text(),"%1$s")]',
    type: 'xpath',
  },
  'filter item': {
    selector: '//*[contains(@for,"%1$s")]',
    type: 'xpath',
  },
  'filter value': {
    selector: '//*[contains(@class,"%1$s")]//*[contains(@class,"three-fifths")]',
    type: 'xpath',
  },
  'apply button': {
    selector: 'button--apply',
    type: 'className',
  },
};
