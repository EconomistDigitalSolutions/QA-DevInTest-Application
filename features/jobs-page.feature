Feature: Jobs page

  Background:
    Given I go to the jobs page

  # Arguably better as an Outline, but avoiding page reloads for speed.
  Scenario: Viewing loaded jobs page
    Then I can see the navigation bar
    And I can see the search form
    And I can see the sector lists
    And I can see the jobs blog
    And I can see the featured jobs
    And I can see the footer

  Scenario: Choosing to signin in
    When I choose to sign in
    Then I am taken to the path /logon/

  Scenario: Choosing to create an account
    When I choose to create an account
    Then I am taken to the path /register/

  Scenario Outline: Clicking links in the navigation bar
    When I click <Option> in the navigation bar
    Then I am taken to the path <Path>
    Examples:
    | Option            | Path        |
    | Home              | /           |
    | Find a job        | /jobs/      |
    | Job alerts        | /newalert/  |
    | Search recruiters | /employers/ |
    | Jobs blog         | /careers/   |

  Scenario: Clicking a sector
    When I click the first sector
    Then I am taken to the jobs list for the first sector
    And I choose to view details for a job
    And I see the job description
    And I can apply for the job

  Scenario Outline: Clicking links in the footer
    When I click <Option> in the footer
    Then I am taken to the path <Path>
    Examples:
    | Option             | Path                                   |
    | About Us           | /about-us/                             |
    | Contact Us         | /contact-us/                           |
    | Terms & Conditions | /terms-and-conditions/                 |
    | Privacy Policy     | /privacy-policy/                       |
    | Advertise with us  | https://recruiters.jobs.economist.com/ |

  Scenario: Searching by keyword
    When I enter the search keyword London
    And I submit my search criteria
    Then I see jobs mentioning London
