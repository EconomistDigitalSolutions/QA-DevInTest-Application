Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar

  Scenario: Search fields render
    Given I go to the jobs page
    Then I should see the search fields

  Scenario: sector lists render
    Given I go to the jobs page
    Then I should see the sector lists
