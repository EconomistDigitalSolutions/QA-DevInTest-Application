Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar

  Scenario: Search fields renderers
  	Given I go to the jobs page
  	Then I should see the keywords field
    And I should see the location field
    And I should see the radial location field

  Scenario: Sector lists renders
  	Given I go to the jobs page
  	Then I should see the sector list

  Scenario: Jobs blog renders
  	Given I go to the jobs page
  	Then I should see the jobs blog

  Scenario: Featured jobs render
	  Given I go to the jobs page
  	Then I should see the featured jobs

  Scenario: Footer renders
	  Given I go to the jobs page
	  Then I should see the footer
