Feature: Signing in

  Background:
    Given I go to the sign in page

  Scenario: Signing in
    When I enter email "roysloco+1@yahoo.co.uk" to sign in
    And I enter password "testpass123" to sign in
    And I submit my sign in details
    Then I am in the Jobs page
    And the user navigation is visible
