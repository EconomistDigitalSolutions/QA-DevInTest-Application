@home
Feature: Jobs page

Background:
  Given I go to the jobs page
  
 @completed
  Scenario: Navigation bar renders    
    Then I should see the navigation bar

  @completed
  Scenario: Search fields render    
    Then I should see the search fields
  @completed
  Scenario: Sector lists render    
    Then I should see the sector lists
  @completed
  Scenario: Jobs blog renders    
    Then I should see the jobs blog

 
  Scenario: Featured jobs render    
    Then I should see the featured jobs
  

  Scenario: Footer renders
    Then I should see the footer 

