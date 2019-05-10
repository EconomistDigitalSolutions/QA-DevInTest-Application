Feature: Each of the links in the navigation bar is functional and goes to the correct page

  Background: Go to the jobs home page
    Given I go to the jobs page
    Then I should see the 'Navigation bar' block

  Scenario: The Home link goes to the Home page
    Then I should see the 'Home' link
    When I click the 'Home' link
    Then I should see the 'Navigation bar' block
      And I should see the 'Job title' searchbox
      And I should see the 'Location' searchbox
      And I should see the 'Radial Location' dropdown
      And I should see the 'Search' button
      And I should see the 'Jobs by Sector' block
      And I should see the 'Jobs blog' block
      And I should see the 'Featured jobs' block
      And I should see the 'Footer' block

  Scenario: The 'Find a job' link goes to the jobs search page
    Then I should see the 'Find a job' link
    When I click the 'Find a job' link
    Then I should see the 'Navigation bar' block
      And I should see the 'Found jobs' text
      And I should see the 'Jobs list' block
      And I should see the 'Browse' block
      And I should see the 'Paginator' block
      And I should see the 'Footer' block

  Scenario: The 'Job alerts' link goes to the jobs search page
    Then I should see the 'Job alerts' link
    When I click the 'Job alerts' link
    Then I should see the 'Navigation bar' block
      And I should see the 'Create a job alert' text
      And I should see the 'Job alert block title' text
      And I should see the 'Job alert form' block
      And I should see the 'Footer' block

  Scenario: The 'Search recruiters' link goes to the jobs search page
    Then I should see the 'Search recruiters' link
    When I click the 'Search recruiters' link
    Then I should see the 'Navigation bar' block
      And I should see the 'Search recruiters title' text
      And I should see the 'Recruiters list' block
      And I should see the 'Recruiter search' block
      And I should see the 'Paginator' block
      And I should see the 'Footer' block

  Scenario: The 'Jobs blog' link goes to the jobs search page
    Then I should see the 'Jobs blog' link
    When I click the 'Jobs blog' link
    Then I should see the 'Navigation bar' block
      And I should see the 'Jobs blog title' text
      And I should see the 'Articles list' block
      And I should see the 'Paginator' block
      And I should see the 'Footer' block
