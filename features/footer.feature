@footer
Feature: Footer

    Background:
        Given I go to the jobs page

    @completed
    Scenario: About us link works
        When I click About us link
        Then I should see About us page

    
    Scenario: Contact us link works
        When I click contact us link
        Then I should see Contact us page