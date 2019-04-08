Feature: Job Search

Scenario: Filtering jobs by sector
  Given I go to the jobs page
  When I select the job sector "Academia"
  Then jobs for sector "Academia" are shown

Scenario: Opening a Job listing
  Given I go to the jobs page
  When I select the job sector "Academia"
  And I click on the the first job ad
  Then a job listing is shown
