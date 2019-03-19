// A mapping between links and the css selector to find them.
var jobsPageVisibleElementsMap = new Map()
jobsPageVisibleElementsMap.set('navigation bar', '#primary-nav')
jobsPageVisibleElementsMap.set('search fields', '.search')
jobsPageVisibleElementsMap.set('sector lists', '.browse')
jobsPageVisibleElementsMap.set('jobs blog', '.articles')
jobsPageVisibleElementsMap.set('featured jobs', '.featured-jobs')
jobsPageVisibleElementsMap.set('footer', 'footer')

// A mapping between links and the css selector to use to find them.
var jobsPageLinks = new Map()
jobsPageLinks.set('Sign in', '.jobseekers__item--sign-in a')
jobsPageLinks.set('Create account', '.jobseekers__item--create-account a')
jobsPageLinks.set('Home', '.primary-nav__item--home a')
jobsPageLinks.set('Find a job', '.primary-nav__item--find-a-job a')
jobsPageLinks.set('Job alerts', '.primary-nav__item--jbe a')
jobsPageLinks.set('Search recruiters', '.primary-nav__item--recruiters a')
jobsPageLinks.set('Jobs blog', '.primary-nav__item--careers-advice a')
jobsPageLinks.set('Banking and finance', '.facet-links__link--banking-and-finance a')


// A mapping between links and page titles where links should point to.
var pageTitles = new Map()
pageTitles.set('Sign in', 'Logon | Jobs.Economist.com')
pageTitles.set('Create account', 'Register | Jobs.Economist.com')
pageTitles.set('Home', 'Jobs.Economist.com | jobs')
pageTitles.set('Find a job','Browse jobs | Jobs.Economist.com')
pageTitles.set('Job alerts','New Job By Email | Jobs.Economist.com')
pageTitles.set('Search recruiters','Recruiters on Jobs.Economist.com')
pageTitles.set('Jobs blog','Articles and careers information on Jobs.Economist.com')
pageTitles.set('Banking and finance','Banking and finance jobs')
pageTitles.set('About Us','The Economist jobs board | About Us')

var pageUrl = new Map()
pageUrl.set('Banking and finance sector jobs', 'jobs/banking-and-finance')


exports.jobsPageVisibleElementsMap = jobsPageVisibleElementsMap
exports.jobsPageLinks = jobsPageLinks
exports.pageTitles = pageTitles
exports.pageUrl = pageUrl
