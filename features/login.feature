Feature: Both 'Sign in' and 'Create account' links go to their respective pages

  Background: Go to the jobs home page
    Given I go to the jobs page

  Scenario: Sign in link goes to the respective page
    When I click the 'Sign in link' link
    Then I should see the 'Sign in form' block
      And I should see the 'Sign in Email' textbox
      And I should see the 'Sign in Password' textbox
      And I should see the 'Sign in checkbox list' block
      And I should see the 'Sign in' button
      And I should see the 'Forgotten password' button

  Scenario: Create account link goes to the respective page
    When I click the 'Create account link' link
    Then I should see the 'Info Text' block
      And I should see the 'Create an account form' block
      And I should see the 'Title' textbox
      And I should see the 'First name' textbox
      And I should see the 'Last name' textbox
      And I should see the 'Email address' textbox
      And I should see the 'Password' textbox
      And I should see the 'Confirm password' textbox
      And I should see the 'Checkbox list' block
      And I should see the 'Create an account' button
