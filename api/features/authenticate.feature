Feature: Authenticate

    Scenario: Submit valid credentials
        Given I have valid credentials
        When I submit the credentials
        Then I should expect a 200 response