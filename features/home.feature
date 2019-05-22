Feature: Jobs page renders correctly

  Background: Open Home page
    Given I go to the home page

  Scenario: Navigation bar renders correctly
    Then 'Navigation bar' is displayed

  Scenario: Search fields render correctly
    Then 'Search Keywords field' is displayed
    And 'Search Location field' is displayed
    And 'Search Distance drop-down' is displayed
    And 'Search button' is displayed

  Scenario: Sector lists render correctly
    Then 'Sector' is displayed

  Scenario: Jobs blog renders correctly
    Then 'Jobs blog' is displayed

  Scenario: Featured jobs render correctly
    Then 'Featured jobs' is displayed

  Scenario: Footer renders correctly
    Then 'Footer' is displayed
