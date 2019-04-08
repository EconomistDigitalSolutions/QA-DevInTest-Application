Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar

  # Note: This could be done as a scenario outline but checking all
  # fields in one scenario is quicker as the page is not reloaded
  # between checks and it can be argued it's one test. 
  # Choosing one or the other depends on preference.
  Scenario: Search fields rendered
    Given I go to the jobs page
    Then I should see the search form
    And I should see the search field for "keyword"
    And I should see the search field for "location"
    And I should see the search field for "distance"
