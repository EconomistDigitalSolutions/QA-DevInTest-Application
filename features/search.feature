Feature: Search

  Background: Landing to the home page
    Given I go to the jobs page

  Scenario Outline: Searching for a job by '<Value>' filter correctly displays relevant search results
    When I click 'find a job'
    And I click 'search tab'
    And I select filter for '<Value>'
    And I click a job from list
    Then I should see relevant search result for '<Value>'

    Examples:
      | Value         |
      | Sector        |
      | Profession    |
      | Contract Type |
      | Hours         |
