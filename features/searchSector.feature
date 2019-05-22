Feature: Clicking on a sector shows a list of jobs from only that sector. Clicking further on a job listing shows you the job details, with an 'apply' button

  Scenario Outline: Check Header links
    Given I go to the home page
    And 'Sector' is displayed
    When I click '<Link name>'
    Then Jobs page opens with '<Sector name>' selected in Sector
    And I get all job vacancies from the page and store them to 'Dynamic's All Jobs'
    And I choose any job from 'Dynamic's All Jobs' and store its number to 'Dynamic's Job number'
    And I get job details for 'Dynamic's Job number' from 'Dynamic's All Jobs' and store them to 'Dynamic's Job'
    When I move to job details clicking 'View details' for 'Dynamic's Job number'
    Then 'Job Description' is displayed
    And 'Apply button' is displayed
    And 'Job Sector' contains '<Sector name>'
    And Job details are as in 'Dynamic's Job'


    Examples:
      | Link name                   | Sector name          |
      | Banking and finance Link    | Banking and finance  |
      | Health Link                 | Health               |