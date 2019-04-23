Feature: Jobs page

  # Scenario: Navigation bar renders
  #   Given I go to the jobs page
  #   Then I should see the 'Navigation Bar'
    
  # Scenario: Search fields render
  #   Given I go to the jobs page
  #   Then I should see the 'Search Keywords Textbox'
  #     And I should see the 'Search Location Textbox'
  #     And I should see the 'Search Radial Location Dropdown'
  #     And I should see the 'Search Button'
  
  # Scenario: Browse jobs by Sector renders
  #   Given I go to the jobs page
  #   Then I should see the 'Browse Jobs By Sector Block'
  #     And I should see the 'Browse Jobs By Sector Link'

  # Scenario: Jobs blog renders
  #   Given I go to the jobs page
  #   Then I should see the 'Jobs Blog Block'

  # Scenario: Featured jobs renders
  #   Given I go to the jobs page
  #   Then I should see the 'Featured Jobs Block'
  #     And I should see the 'Featured Jobs Link'

  # Scenario: Footer renders
  #   Given I go to the jobs page
  #   Then I should see the 'Footer'

  Scenario Outline:
    Given I go to the jobs page
    When I click '<Link>'
    Then I should see the '<Element>'

  Examples:
  | Link                | Element             |
  | Sign In Link        | Sign In Form        |
  | Create Account Link | Create Account Form |