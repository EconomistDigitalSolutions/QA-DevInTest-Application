Feature: Ensuring all the links in the footer are functional

  Scenario Outline: The '<link>' in the footer is functional
    Given I go to the jobs page
    Then I should see the 'Footer' block
      And I should see the '<link>'
    When I click the '<link>'
    Then the '<link>' link should lead to the '<page>'
  
  Examples:
  | link                            | page                                                             |
  | About Us link                   | https://jobs.economist.com/about-us/                             |
  | Contact Us link                 | https://jobs.economist.com/contact-us/                           |
  | Terms & Conditions link         | https://jobs.economist.com/terms-and-conditions/                 |
  | Privacy Policy link             | https://jobs.economist.com/privacy-policy/                       |
  | Advertise with us link          | https://recruiters.jobs.economist.com/                           |
  | Facebook link                   | https://www.facebook.com/economistcareersnetwork                 |
  | Twitter link                    | https://twitter.com/careersnetwork                               |
  | Linkedin link                   | https://www.linkedin.com/company/the-economist-careers-network   |
  | Madgex Job Board Solutions link | https://www.madgex.com/                                          |
