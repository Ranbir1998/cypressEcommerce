/// <reference types="Cypress"/>
describe("My First Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    //Here we are mocking requests
    //Here we are mocking requests
    //Here we are mocking requests
    //Here we are mocking requests
    //Here we are mocking requests
    //Here we are mocking requests


    //Security testing
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=raju";
        req.continue((res) => {
          //expect(res.statusCode).to.equal(403)
        })
      }
    ).as("dummyUrl")
    cy.get(".btn.btn-primary").click();
    cy.wait("@dummyUrl");
  });
});
