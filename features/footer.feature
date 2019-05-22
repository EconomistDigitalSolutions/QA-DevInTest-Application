Feature: Ensuring all the links in the footer are functional

  Background: Open Home page
    Given I go to the home page
    And 'Footer' is displayed

  Scenario Outline: Check Footer links
    When I click '<Link name>'
    Then '<Page name>' is displayed

    Examples:
      | Link name               | Page name             |
      | About Us Link           | About Us Page         |
      | Contact Us Link         | Contact Us Page       |
      | Terms & Conditions Link |Terms & Conditions Page|
      | Privacy Policy Link     |  Privacy Policy Page  |
      | Advertise with us Link  |Advertise with us Page |


  Scenario Outline: Check Social media links in Footer
    When I click '<Link name>'
    And I switch to the last window
    Then '<Page name>' is displayed
    Examples:
      | Link name               | Page name             |
      | Facebook Link           | Facebook              |
      | Twitter Link            | Twitter               |
      | Linkedin Link           | Linkedin              |