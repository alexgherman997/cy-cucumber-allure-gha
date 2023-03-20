Feature: E2e feature


    Background:
        Given A web browser is at the saucelabs login page

    Scenario: Add to cart 
    When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
    Then the url will contains the inventory subdirectory
    When clicks on the "Sauce Labs Backpack" link
    And clicks on the "Add to cart" button
    Then the "Sauce Labs Backpack" is displayed 