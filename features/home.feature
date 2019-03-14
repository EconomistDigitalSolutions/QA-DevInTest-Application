Feature: Jobs page

Scenario Outline: Jobs page components check.
  Given I go to the jobs page
  Then I should see the <element>
  Examples:
  | element |
  | "navigation bar" |
  | "search fields" |
  | "sector lists" |
  | "jobs blog" |
  | "featured jobs" |
  | "footer" |

Scenario Outline: 'Sign in' and 'Create account' links go to correct pages.
  Given I go to the jobs page
  When I click on <link>
  Then I should see the <page> page
  Examples:
  | link                | page |
  | "Sign in"           | "Sign in" |
  | "Create account"    | "Create account"  |
  | "Home"              | "Home"  |
  | "Find a job"        | "Find a job"  |
  | "Job alerts"        | "Job alerts"  |
  | "Search recruiters" | "Search recruiters"  |
  | "Jobs blog"         | "Jobs blog" |
  
