Feature: Top navigation

  Scenario Outline: Navigation bar links are functional
    Given I go to the jobs page
    When I click on navigation bar link "<linkName>"
    Then I am taken to the "<pageUrl>" page

    Examples:
    | linkName | pageUrl |
    | Home | / |
    | Find a job | /jobs/ |
    | Job alerts | /newalert/ |
    | Search recruiters | /employers/ |
    | Jobs blog | /careers/ |
