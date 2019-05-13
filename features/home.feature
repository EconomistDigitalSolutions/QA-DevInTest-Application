Feature: Jobs page renders correctly

  Background: Go to the jobs home page
    Given I go to the jobs page

  Scenario: Navigation bar renders
    Then I should see the 'Navigation bar' block
  
  Scenario: Search fields renders
    Then I should see the 'Job title' searchbox
      And I should see the 'Location' searchbox
      And I should see the 'Radial Location' dropdown
      And I should see the 'Search' button

  Scenario: Sector lists renders
    Then I should see the 'Jobs by Sector' block

  Scenario: Jobs blog
    Then I should see the 'Jobs blog section' block

  Scenario: Featured jobs
    Then I should see the 'Featured jobs' block

  Scenario: Footer
    Then I should see the 'Footer' block
