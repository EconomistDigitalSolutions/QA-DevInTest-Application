Feature: Authorization

  Background: Landing to the home page
    Given I go to the jobs page

  Scenario Outline: '<Item>' link goes to its respective page
    When I click '<Item>'
    Then '<Item>' page is opened

  Examples:
    | Item              |
    | sign in           |
    | create account    |

  Scenario: Reader can sign in
    When I click 'sign in'
    And I log in as follows
        | email    | stive.norton.ft@gmail.com |
        | password | econpassword1             |
    Then 'home' page is opened
    And I should be logged in with name
        | name | Stive Norton |
