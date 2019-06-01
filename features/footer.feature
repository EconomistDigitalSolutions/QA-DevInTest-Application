Feature: Footer links

  Scenario: About Us Link Works
    Given I go to the jobs page
    When I click the About Us link in the footer
    Then I should see the About Us Page

  Scenario: Contact Us Link Works
    Given I go to the jobs page
    When I click the Contact Us link in the footer
    Then I should see the Contact Us Page

  Scenario: Terms and Conditions Link Works
    Given I go to the jobs page
    When I click the Terms and Conditions link in the footer
    Then I should see the Terms and Conditions Page

  Scenario: Privacy Policy Link Works
    Given I go to the jobs page
    And I click the Privacy Policy link in the footer
    Then I should see the Privacy Policy Page

  Scenario: Advertise with us Link Works
    Given I go to the jobs page
    When I click the Advertise with us link in the footer
    Then I should see the Advertise with us Page
