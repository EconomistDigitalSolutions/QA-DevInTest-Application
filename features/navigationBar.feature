Feature: Each of the links in the navigation bar is functional and goes to the correct page

  Scenario Outline: Check Navigation Bar links
    Given I go to the home page
    And 'Navigation bar' is displayed
    When I click '<Link name>'
    Then '<Page name>' is displayed

    Examples:
      | Link name              | Page name              |
      | Home Link              | Home Page              |
      | Find a job Link        | Jobs Page              |
      | Job alerts Link        | New alert Page         |
      | Search recruiters Link | Search recruiters Page |
      | Jobs blog Link         | Jobs blog Page         |