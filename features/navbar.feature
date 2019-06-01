Feature: Navbar links send user to correct pages

    Scenario: Home link does not change URL
      Given I go to the jobs page
      When I click the Home link in the navbar
      Then I should be on the jobs page


    Scenario: Find a job link sends user to jobs list
      Given I go to the jobs page
      When I click the Find a job link in the navbar
      Then I should be on the Find a job page


    Scenario: Job alerts link sends user to alerts page
      Given I go to the jobs page
      When I click the Job alerts link in the navbar
      Then I should be on the Job alerts page


    Scenario: Search recruiters link sends user to employers page
      Given I go to the jobs page
      When I click the Search recruiters link in the navbar
      Then I should be on the recruiters page


    Scenario: Jobs blog link sends user to blog page.
      Given I go to the jobs page
      When I click the Jobs blog link in the navbar
      Then I should be on the job blog page
