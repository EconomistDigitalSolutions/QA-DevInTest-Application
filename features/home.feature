Feature: Home page

  Background: Landing to the home page
    Given I go to the jobs page

  Scenario Outline: Home page renders correctly with the following component visible '<Item>'
    Then I should see the '<Item>'

  Examples:
    | Item              |
    | navigation bar    |
    | search fields     |
    | sector lists      |
    | jobs blog article |
    | featured jobs     |
    | footer            |
