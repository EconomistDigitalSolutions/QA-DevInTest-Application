Feature: Sector links

  Scenario: Development link works
    Given I go to the jobs page
    When I click development sector link
    Then I should see the development search page

  Scenario: Development view details works
    Given I go to the jobs page
    When I click development sector link
    And I click the view details button
    Then I should see an apply button

  Scenario: Government link works
    Given I go to the jobs page
    When I click government sector link
    Then I should see the government search page

  Scenario: Government view details works
    Given I go to the jobs page
    When I click government sector link
    And I click the view details button
    Then I should see an apply button

  Scenario: Banking and finance link works
    Given I go to the jobs page
    When I click banking and finance sector link
    Then I should see the banking and finance search page

  Scenario: Banking and finance view details works
    Given I go to the jobs page
    When I click banking and finance sector link
    And I click the view details button
    Then I should see an apply button
