/// <reference types="Cypress"/>
describe("My First Test Suite", function () {
  it("My Third Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    //Here we are mocking response
    //Here we are mocking response
    //Here we are mocking response
    //Here we are mocking response
    //Here we are mocking response

    //cy.intercept({requestobject}, {responseobject}) //takes JSON
    // Intercept the GET request to the specified URL and provide a mock response
    //Here we are mocking response
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "BSG",
            aisle: "2302",
          },
        ],
      }
    ).as("bookretrievals"); // Alias the intercept for later use

    cy.get(".btn.btn-primary").click();
    //cy.wait('@bookretrievals')  //wait until promise is resolved after cypress sends mock data
    cy.wait("@bookretrievals").then(({ request, response }) => {
      // Check that the number of table rows is equal to the response body length + 1 (header row)
      cy.get("tr").should("have.length", response.body.length + 1);

      // Assert the text of the paragraph
      cy.get("p").should("have.text", "Oops only 1 Book available");
    });
  });
});
