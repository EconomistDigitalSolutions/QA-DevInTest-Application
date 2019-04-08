Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar

  # Note: This could be done as a scenario outline but checking all
  # fields in one scenario is quicker as the page is not reloaded
  # between checks and it can be argued it's one test. 
  # Choosing one or the other depends on preference.
  Scenario: Search fields rendered
    Given I go to the jobs page
    Then I should see the search form
    And I should see the search field for keyword
    And I should see the search field for location
    And I should see the search field for distance

  Scenario: Sector list rendered
    Given I go to the jobs page
    Then the sector list is shown
    And the sector list contains job sectors

  Scenario: Jobs Blog rendered
    Given I go to the jobs page
    Then the jobs blog is shown
    And the jobs blog contains articles

  Scenario: Featured jobs rendered
    Given I go to the jobs page
    Then the Featured Jobs brick is shown
    And the Featured Jobs brick contains featured jobs

  Scenario: Footer rendered
    Given I go to the jobs page
    Then the footer is shown

  Scenario: Signin link goes to the correct page
    Given I go to the jobs page
    When I click on the sign in link
    Then I am taken to the sign in page

  Scenario: Create account link goes to the correct page
    Given I go to the jobs page
    When I click on the create account link
    Then I am taken to the registration page
