@searching
Feature: Searching

Scenario: List jobs from sector
  Given I go to the jobs page
  When I click on a sector
  Then I should see jobs from that sector


Scenario: Show further details
  When I click on a job
  Then I should see job details
  And Apply button


Scenario: Searching for jobs
  Given I go to the jobs page
  When I search a job
  And I click on the first search
  Then Results will match search keyword
