Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar

  Scenario: Search fields render
    Given I go to the jobs page
    Then I should see search fields

  Scenario: Sector lists
    Given I go to the jobs page
    Then I should see sector lists

  Scenario: Jobs blog
    Given I go to the jobs page
    Then I should see jobs blog

  Scenario: Featured jobs
    Given I go to the jobs page
    Then I should see featured jobs

  Scenario: Footer should render
    Given I go to the jobs page
    Then I should see the footer

  Scenario: Sign in link
    Given I go to the jobs page
    When I click sign in
    Then I should see login page
