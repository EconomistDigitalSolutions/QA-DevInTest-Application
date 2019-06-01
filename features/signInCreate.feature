Feature: Sign In and Create Account Link

  Scenario: Create Account link goes to correct page
    Given I go to the jobs page
    When I click the Create Account link
    Then I should see the Register Page

  Scenario: Create Account link goes to correct page
    Given I go to the jobs page
    When I click the Sign In link
    Then I should see the Log on Page
