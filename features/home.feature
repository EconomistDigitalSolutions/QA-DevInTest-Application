Feature: Jobs page

  Background:
    Given I am on the homepage

  Scenario: Jobs Search
    Given I should see the section "Jobs blog"
    And I should see the section "Featured jobs"
    And I submit valid search and get relevant results 

  Scenario: Jobs Search Edge Cases
    Given I should see the section "Jobs blog"
    And I should see the section "Featured jobs"
    And I submit valid search and get relevant results 

  Scenario: Login (Incorrect)
    Given I click the link text "Sign in"
    Then I see signin form fields

  Scenario: Create Account
    Given I click the link text "Create account"
    Then I see create form fields
    And I see To manage your job search please sign in or create an account below.

  Scenario Outline: Jobs Page Navigation Bar Links
    Given the navigation bar should be visible
    When I click the link text "<Link text>"
    Then I expect to see page name "<Page title>"
    Examples:
      | Link text         | Page title                                             |
      | Find a job        | Browse jobs                                            |
      | Job alerts        | New Job By Email                                       |
      | Search recruiters | Recruiters                                             |
      | Jobs blog         | Articles and careers information on Jobs.Economist.com |


  Scenario Outline: Jobs Page Footer Links
    Given the "footer navigation bar" is visible
    When I click the link text "<Link text>"
    Then I expect to see page name "<Link title>"
    Examples:
      | Link text          |
      | About Us           |
      | Contact Us         |
      | Terms & Conditions |
      | Privacy Policy     |
      | Advertise with us  |

  Scenario Outline: Job sectors
    Given the "sector list" is visible
    When I click on text link "<Text link>"
    Then I should see the sector "<Sector page title>"
    Examples:
      | Link text                   | Sector page title           |
      | Banking and finance         | Banking and finance jobs    |
      | Business services           | Business services           |
      | Government                  | Government                  |
      | Academia                    | Academia                    |
      | Primary and utility         | Primary and utility         |
      | Charity                     | Charity                     |
      | International public sector | International public sector |
      | NGO                         | NGO                         |
      | Consultancy                 | Consultancy                 |
      | Development                 | Development                 |
