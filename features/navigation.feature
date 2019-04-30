 Feature: Navigation

  Scenario Outline: <Link> redirects to proper page
    Given I go to the jobs page
    When I click '<Link>'
    Then I should see the '<Element>'

  Examples:
  | Link                | Element             |
  | Sign In Link        | Sign In Form        |
  | Create Account Link | Create Account Form |

  Scenario Outline: <Link> from navigation bar redirects to proper page
    Given I go to the jobs page
    When I click '<Link>'
    Then I should see the '<Element>'

  Examples:
  | Link                   | Element                  |
  | Home Link              | Home Header              |
  | Find A Job Link        | Jobs Header          |
  | Job Alerts Link        | Job Alerts Header        |
  | Search Recruiters Link | Search Recruiters Header |
  | Jobs Blog Link         | Jobs Blog Header         |
