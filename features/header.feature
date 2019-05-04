# -- FILE: features/home.feature
Feature: Each of the links in the navigation bar is functional and goes to the correct page

  Background: Go to the jobs home page
    Given I go to the jobs page
    Then I should see the 'Navigation bar' block

  Scenario:
    Then I should see the 'Home' link
    When I click the 'Home' link
    Then 