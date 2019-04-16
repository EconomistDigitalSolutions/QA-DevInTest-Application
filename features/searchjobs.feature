@searchjobs @completed
Feature: Search jobs
    Background:
        Given I go to the jobs page

    Scenario Outline: Searching for a job correctly displays relevant search results

        When I search for jobs with keyword <keyword> in location <location> within <miles> miles
        Then search results should contain keyword <keyword>
        Examples:
            | keyword  | location | miles |
            | Director | UK       | 10     |

    
    Scenario Outline: After clicking on jobs by sector clicking further on a job listing shows you the job details, with an 'apply' button.

        And I search for jobs by sector <sector>
        When I click further on a job listing
        Then I should see job details and a widget to apply
        Examples:
            | sector              |
            | Banking and finance |

  @completed
    Scenario Outline: Clicking on a sector shows a list of jobs from only that sector

        When I search for jobs by sector <sector>
        Then I should see jobs only from that sector <sectorKeywords>
        Examples:
            |sector              | sectorKeywords                        | 
            |Banking and finance | finance,bank,risk,treasury,investment |

