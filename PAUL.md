# Additonal packages use

* `chai` - for speed, with it's easy assertion library
* `multiple-cucumber-html-reporter` - For the HTML reporter
* `es-lint` - For linting

# Gherkin Approach

I included the criteria in natural flows as possible (i.e. as part of search test, for example).

The is more verbose Gherkin than I would keep, but as it is timed test with a goal, I left the page title checking in the Gherkin step, more than the code.

# Edge cases

Added some minmal tests around the search

# Additional scripts

There are addtional scripts (and alterations), to run:

```
$ npm install
$ npm run es-lint
$ npm run test
$ npm run report
```
The last npm script will generate the HTML report in the reports folder.

# Notes/The Unfinished

* The standard cucumberjs folder/file setup was helpful as was the already created setup files (I didn't get to look at those as much as I wanted).
* I was trying to keep as close to the raw framework as possible, latching onto Chai as a last minute quick solution, given this is a test with time limits. 
* A few scenarios use very verbose "Examples" tables, which is something I usually avoid/move past.
* I got the HTML reporter in, but as yet no screenshots - just a matter of a little (more) time
* I always treat framework as contantly evolving, so this is definitely what i would call a start with room for improvement :)
* The test pass now, because of course I worked towards that in course of building up code, and because there was a verification remot, rather than exploratory.
* I set Chrome to headless-mode just for personal convenience.
* All tests could easily be run in parallel, are there is no interdependency.
  