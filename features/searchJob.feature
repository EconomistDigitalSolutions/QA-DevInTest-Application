Feature: Job Searches

  Scenario: Job Search displays correctly
    Given I go to the jobs page
    When I enter research into the keywords field
    And I enter UK into the location field
    And I click the search button
    Then I should see the search jobs page displaying only research jobs
    And I should see the search jobs page displaying only jobs in the UK
