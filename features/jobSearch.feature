Feature: Searching for a job correctly displays relevant search results

  Scenario Outline: Search by job title '<keyword>'
    Given I go to the jobs page
    Then I should see the 'Job title' searchbox
    When I provide value '<keyword>' for the 'Job title' field
      And I click the 'Search' button
    Then I should see the 'Search block'
      And 'value' in the 'Keywords Search' textbox should be '<keyword>'
    When I click random 'Jobs list header'
      Then the 'Job details' should include '<keyword>'

  Examples:
  | keyword      |
  | bank, health |
  | charity      |
  | management   |

  Scenario Outline: Search by job location '<location>'
    Given I go to the jobs page
    Then I should see the 'Location' searchbox
    When I provide value '<location>' for the 'Location' field
      And I click the 'Search' button
    Then I should see the 'Search block'
      And 'value' in the 'Location Search' textbox should be '<location>'
    When I click random 'Jobs list header'
      Then the 'Location details' should include '<location>'

  Examples:
  | location         |
  | London (Greater) |
  | Mauritania       |
  | Solomon Islands  |

  Scenario Outline: Search by job location '<radial location>'
    Given I go to the jobs page
    Then I should see the 'Radial Location' dropdown
    When I select value '<radial location>' in the 'Radial Location' dropdown
      And I click the 'Search' button
    Then I should see the 'Search block'
      And value '<distance>' in the 'Radial Location Search' dropdown should be 'selected'

  Examples:
  | radial location | distance |
  | Within 0 miles  | 0        |
  | Within 5 miles  | 5        |
  | Within 10 miles | 10       |
  | Within 15 miles | 15       |
  | Within 20 miles | 20       |
