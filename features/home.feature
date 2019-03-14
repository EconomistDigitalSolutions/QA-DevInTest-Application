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

Scenario: Jobs page 'Sign in' and 'Create account' links
  Given I go to the jobs page
  When I click on 'Sign in'
  Then I should see the 'Sign in' page
