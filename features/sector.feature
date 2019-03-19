Feature: Jobs sector page

Scenario Outline: Check that job links on a job sector's page work correctly
  Given I go to the <page> page
  When I click on the <jobNo> job from the list
  Then the correct job should be displayed
  Examples:
  | page                                | jobNo   |
  | "Banking and finance sector jobs"   | "1st"   |
  | "Banking and finance sector jobs"   | "2nd"   |
  | "Banking and finance sector jobs"   | "last"  |

Scenario Outline: Check that a job's page shows job details and an apply button.
  Given I go to the <page> page
  When I click on the <jobNo> job from the list
  Then the job's details should be displayed
  And an apply button should be visible
  Examples:
  | page                                | jobNo   |
  | "Banking and finance sector jobs"   | "1st"   |
  | "Banking and finance sector jobs"   | "2nd"   |
  | "Banking and finance sector jobs"   | "last"  |
