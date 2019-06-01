Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar
    
  Scenario: Search fields renderers
  	Given I go to the jobs page
  	Then I should see the search fields
  
  Scenario: Sector lists renders
  	Given I go to the jobs page
  	Then I should see the sector list
  
  Scenario: Jobs blog renders
  	Given I go to the jobs page
  	Then I should see the jobs blog
  
  Scenario: Featured jobs render
	Given I go to the jobs page
  	Then I should see the features jobs
  	
  Scenario: Footer renders
	Given I go to the jobs page
	Then I should see the footer
