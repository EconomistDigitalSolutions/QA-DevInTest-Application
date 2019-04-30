 Feature: Jobs

  Scenario: Job has required fields
    Given I go to the jobs page
    When I click random sector
      And I click random job
    Then I should see the 'Job Details'
      And I should see the 'Apply Button'
