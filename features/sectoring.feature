 Feature: Sectoring

  Scenario Outline: <Sector> sector link redirects to the proper page 
    Given I go to the jobs page
    When I click '<Sector> Sector Link'
    Then I should see the '<Sector> Header'
      And I should see selected sector is '<Sector>'

  Examples:
  | Sector                      |
  | Banking And Finance         |
  | Government                  |
  | Academia                    |
  | Primary And Utility         |
  | Charity                     |
  | International Public Sector |
  | NGO                         |
  | Consultancy                 |
  | Development                 |
  | Health                      |
  | Humanitarian                |
  | Other                       |
