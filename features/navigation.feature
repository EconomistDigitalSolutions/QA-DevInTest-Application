
@nav_links
Feature: Test navigation links

Scenario: Home link
  Given I go to the jobs page
  When I click home
  Then Redirects to home page

Scenario: Find a job link
  Given I go to the jobs page
  When I click Find a job
  Then Redirects to Find a job page

  Scenario: Job alerts link
    Given I go to the jobs page
    When I click Job alerts
    Then Redirects to Job alerts page

    Scenario: Search recruiters link
      Given I go to the jobs page
      When I click Search recruiters
      Then Redirects to Search recruiters page

      Scenario: Jobs blog link
        Given I go to the jobs page
        When I click Jobs blog
        Then Redirects to Jobs blog
