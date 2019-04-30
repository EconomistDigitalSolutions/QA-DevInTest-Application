 Feature: Search

  Scenario Outline: Searching for a job correctly displays relevant search results
    Given I go to the jobs page
    When I set text '<Job>' into 'Search Keywords Textbox'
      And I set text '<Location>' into 'Search Location Textbox'
      And I click 'Search Location Hint'
      And I select '<Radial Location>' from 'Search Radial Location Dropdown'
      And I click 'Search Button'
    Then I should see the 'Jobs Header'
      And I should see keywords are '<Job>'
      And I should see location country is '<Location>'
      And I should see radial location is '<Radial Location>'

  Examples:
  | Job      | Location       | Radial Location |
  | Adviser  | United Kingdom | Within 20 miles |
