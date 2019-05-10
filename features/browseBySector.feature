Feature: Clicking on a sector shows a list of jobs from only that sector. Clicking further on a job listing shows you the job details, with an 'apply' button

  Background: Go to the jobs home page
    Given I go to the jobs page
    Then I should see the 'Jobs by Sector' block

  Scenario Outline: Clicking on a <sector link> shows a list of jobs from only that <sector>
    Then I should see the '<sector> Sector' link
    When I click the '<sector> Sector' link
    Then I should see the '<sector> jobs' text
      And I should see the '<sector> Filter'
    When I click random 'Jobs list header' among 'Jobs list'

  Examples:
  | sector                      |
  | Banking and finance         |
#   | Business services           |
#   | Government                  |
#   | Academia                    |
#   | Primary and utility         |
#   | Charity                     |
#   | International public sector |
#   | NGO                         |
#   | Consultancy                 |
#   | Development                 |
#   | Health                      |
#   | Humanitarian                |
#   | Other                       |