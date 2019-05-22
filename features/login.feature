Feature: Both 'Sign in' and 'Create account' links go to their respective pages

  Background: Open Home page
    Given I go to the home page
    And 'Top bar' is displayed

  Scenario: Sign in link goes to the respective page
    When I click 'Sign In Link'
    Then 'Sign in block' is displayed
    And 'Sign in Email address' is displayed
    And 'Sign in Password' is displayed
    And 'Forgotten password' is displayed
    And 'Keep me signed in' is displayed
    And 'Sign in button' is displayed

  Scenario: Create account link goes to the respective page
    When I click 'Create Account Link'
    Then 'Create an account block' is displayed
    And 'Title' is displayed
    And 'First Name' is displayed
    And 'Last Name' is displayed
    And 'Email address' is displayed
    And 'Password' is displayed
    And 'Confirm password' is displayed
    And 'Keep me signed in check box' is displayed
    And 'Receive emails check box' is displayed
    And 'Receive emails as text check box' is displayed
    And 'Free Cv review check box' is displayed
    And 'Terms and Conditions check box' is displayed
    And 'Create an account button' is displayed
    And 'Card block' is displayed
