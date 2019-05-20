Feature: Navigation bar

  Background: Landing to the home page
    Given I go to the jobs page

  Scenario Outline: '<Item>' link in the navigation bar is functional and goes to the correct page
    When I click '<Item>'
    Then '<Item>' page is opened

  Examples:
    | Item              |
    | home              |
    | find a job        |
    | job alerts        |
    | search recruiters |
    | jobs blog         |
