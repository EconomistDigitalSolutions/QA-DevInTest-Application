Feature: Footer links
  Scenario: About us
    Given I go to the jobs page
    When I click on About us
    Then Redirect to About us

    Scenario: Contact us
      Given I go to the jobs page
      When I click on Contact us
      Then Redirect to Contact us

      Scenario: Terms and conditions
        Given I go to the jobs page
        When I click on Terms and conditions
        Then Redirect to Terms and conditions

        Scenario: Privacy policy
          Given I go to the jobs page
          When I click on Privacy policy
          Then Redirect to Privacy policy

          Scenario: Advertise with us
            Given I go to the jobs page
            When I click on Advertise with us
            Then Redirect to Advertise with us
