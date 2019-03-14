var jobsPageVisibleElementsMap = new Map()
jobsPageVisibleElementsMap.set('navigation bar', '#primary-nav')
jobsPageVisibleElementsMap.set('search fields', '.search')
jobsPageVisibleElementsMap.set('sector lists', '.browse')
jobsPageVisibleElementsMap.set('jobs blog', '.articles')
jobsPageVisibleElementsMap.set('featured jobs', '.featured-jobs')
jobsPageVisibleElementsMap.set('footer', 'footer')

var jobsPageLinks = new Map()
jobsPageLinks.set('Sign in', '.jobseekers__item--sign-in a')
jobsPageLinks.set('Create account', '.jobseekers__item--create-account a')

var pageTitles = new Map()
pageTitles.set('Sign in', 'Logon | Jobs.Economist.com')
pageTitles.set('Create account', 'Register | Jobs.Economist.com')

exports.jobsPageVisibleElementsMap = jobsPageVisibleElementsMap
exports.jobsPageLinks = jobsPageLinks
exports.pageTitles = pageTitles
