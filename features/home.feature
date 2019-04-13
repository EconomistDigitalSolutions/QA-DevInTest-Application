Feature: Jobs Homepage

  Background:
    Given I am on the homepage

  Scenario: Jobs Search
    Given I should see the section "Jobs blog"
    And I should see the section "Featured jobs"
    And I submit valid search with "Vice President" and get relevant results

  Scenario Outline: Jobs Search Edge Cases
    Given I submit valid search with "<search terms>" and get relevant results
    Examples:
      | search terms   |
      | vice president |
      | VICE PRESIDENT |

  Scenario: Login form
    Given I click the link text "Sign in"
    Then the sign in form displayed
    And I try to log in with invalid credentials

  Scenario: Create account form
    Given I click the link text "Create account"
    Then the create account form displayed

  Scenario Outline: Jobs Page Navigation Bar Links

    # I was avoiding the Gherkin be too verbose/granular, but left some here for both speed and demo
    Given I click the link text "<Link text>"
    Then I expect to see page title "<Page title>"
    Examples:
      | Link text         | Page title                                              |
      | Find a job        | Browse jobs \| Jobs.Economist.com                       |
      | Job alerts        | New Job By Email \| Jobs.Economist.com                  |
      | Search recruiters | Recruiters on Jobs.Economist.com                        |
      | Jobs blog         | Articles and careers information on Jobs.Economist.com  |

  Scenario Outline: Jobs Page Footer Links
    Given I click the link text "<Link text>"
    Then I expect to see page title "<Link title>"
    Examples:
      | Link text          | Link title                                   |
      | About Us           | The Economist jobs board \| About Us         |
      | Contact Us         | Jobs.Economist.com \| Contact Us             |
      | Terms & Conditions | Jobs.Economist.com \| Terms & Conditions     |
      | Privacy Policy     | Jobs.Economist.com \| Privacy Policy         |
      | Advertise with us  | Jobs.Economist.com \| Recruiter Services     |

  Scenario Outline: Job sectors
    Given I click the link text "<Sector>"
    Then I should see the sector "<Sector page title>"
    Examples:
      | Sector                      | Sector page title                |
      | Banking and finance         | Banking and finance jobs         |
      | Business services           | Business services jobs           |
      | Government                  | Government jobs                  |
      | Academia                    | Academia jobs                    |
      | Primary and utility         | Primary and utility jobs         |
      | Charity                     | Charity jobs                     |
      | International public sector | International public sector jobs |
      | NGO                         | NGO jobs                         |
      | Consultancy                 | Consultancy jobs                 |
      | Development                 | Development jobs                 |
