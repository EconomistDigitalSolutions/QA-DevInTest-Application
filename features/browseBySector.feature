Feature: Clicking on a sector shows a list of jobs from only that sector. Clicking further on a job listing shows you the job details, with an 'apply' button

  Background: Go to the jobs home page
    Given I go to the jobs page
    Then I should see the 'Jobs by Sector' block

  Scenario Outline: Clicking on the '<sector>' sector and further on a random job
    Then I should see the '<sector> Sector' link
    When I click the '<sector> Sector' link
    Then I should see the '<sector> jobs' text
      And I should see the '<sector> Filter'
    When I click random 'Jobs list header' on the 'Jobs list'
    Then I should see the 'Job description' block
      And I should see the 'Apply' button

  Examples:
  | sector                      |
  | Banking and finance         |
  | Business services           |
  | Government                  |
  | Academia                    |
  | Primary and utility         |
  | Charity                     |
  | International public sector |
  | NGO                         |
  | Consultancy                 |
  | Development                 |
  | Health                      |
  | Humanitarian                |
  | Other                       |