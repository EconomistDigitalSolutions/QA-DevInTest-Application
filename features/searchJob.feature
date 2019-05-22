Feature: Searching for a job correctly displays relevant search results
  Background: Open Home page
    Given I go to the home page
    And 'Search block' is displayed

  Scenario Outline: Search by a key word displays relevant search results
    When I type '<Key word>' into 'Search Keywords field'
    And I click 'Search button'
    Then 'Jobs page' is displayed
    And 'Search results title' contains '<Key word>'
    When I get all job vacancies from the page and store them to 'Dynamic's All Jobs'
    And I choose any job from 'Dynamic's All Jobs' and store its number to 'Dynamic's Job number'
    And I move to job details clicking 'View details' for 'Dynamic's Job number'
    Then 'Job Description' is displayed
    And 'Job Description' contains '<Key word>'


    Examples:
      | Key word             |
      | Analyst              |
      | Doctor               |

  Scenario Outline: Search by a location displays relevant search results
    When I type '<Location>' into 'Search Location field'
    And I select '<Distance>' in 'Search Distance drop-down'
    And I click 'Search button'
    Then 'Jobs page' is displayed
    And 'Search results title' contains '<Location>'
    And 'Search results title' contains '<Distance>'
    And '<Location>' is present in 'Search Location'
    And 'Search Location Distance' contains '<Distance>'

    Examples:
      | Location           | Distance         |
      | London (Greater)   | Within 10 miles  |
      | Washington D.C.    | Within 15 miles  |
