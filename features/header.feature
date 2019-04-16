@header
Feature: Header

    Background:
        Given I go to the jobs page

    @completed
    Scenario: Sign in link works
        When I click sign in link
        Then I should see the sign in page

   
    Scenario: Create account link works
        When I click create account link
        Then I should see the create account page
   
    Scenario: Home link works
        When I click home link
        Then I should see home page
    
    Scenario: find a job link works
        When I click find a job link
        Then I should see jobs page



