 Feature: Footer

  Scenario Outline: Footer <Link> redirects to proper page
    Given I go to the jobs page
    When I click '<Link>'
    Then I should see the '<Element>'

  Examples:
  | Link                      | Element                     |
  | About Us Link             | About Us Header             |
  | Contact Us Link           | Contact Us Header           |
  | Terms And Conditions Link | Terms And Conditions Header |
  | Privacy Policy Link       | Privacy Policy Header       |
  | Advertise With Us Link    | Advertising Options Label   |

  Scenario Outline: Footer <Social Button> redirects to proper page
    Given I go to the jobs page
    When I click '<Social Button>'
    Then I should see the page with url '<Url>'

  Examples:
  | Social Button   | Url      |
  | Facebook Button | Facebook |
  | Twitter Button  | Twitter  |
  | Linkedin Button | LinkedIn |
