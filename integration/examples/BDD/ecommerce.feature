Feature: End to End Ecommerce Vaidation


    application regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open ecommerce Page
    When I add items to cart
    And Validate the total prices 
    Then select the country submit and verify Thankyou

    @smoke
    Scenario:Filling the form to shop
    Given I open ecommerce Page
    When I fill the form details
             |name|gender|
             |Apurva|Female|
    Then I validate the form behaviour
    And select the Shop Page