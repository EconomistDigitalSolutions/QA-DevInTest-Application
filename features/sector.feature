Feature: Sector

  Background: Landing to the home page
    Given I go to the jobs page

  Scenario: Clicking sector and further
    When I click an option from sector list
    Then Page with relevant sector is opened
    When I click a job from list
    Then I should see the 'job description'
    And I should see the 'apply button'
