Feature: Both 'Sign in' and 'Create account' links go to their respective pages

  Background: Go to the jobs home page
    Given I go to the jobs page

  Scenario: Sign in link goes to the respective page
    When I click 'Sign in' link

  Scenario: Create account link goes to the respective page
    When I click 'Create account' link
