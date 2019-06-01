Feature: Sector links

  Scenario: Development link works
    Given I go to the jobs page
    When I click development sector link
    Then I should see the development search page
    And I should only see development jobs

  Scenario: Development view details works
    Given I go to the jobs page
    When I click development sector link
    And I click to view details
    Then I should see an apply button


  Scenario: Government link works
    Given I go to the jobs page
    When I click government sector link
    Then I should see the government search page
    And I should only see government jobs

  Scenario: Government view details works
    Given I go to the jobs page
    When I click government sector link
    Then I should see the government search page

  Scenario: Banking and finance link works
    Given I go to the jobs page
    When I click Banking and finance sector link
    Then I should see the Banking and finance search page
    And I should only see Banking and finance jobs

  Scenario: Banking and finance view details works
    Given I go to the jobs page
    When I click Banking and finance sector link
    Then I should see the Banking and finance search page
