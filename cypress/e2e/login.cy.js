Cypress.on("uncaught:exception", (err, runnable) => {
  console.error(err.stack);
  return false;
});

describe("Login Test", () => {
  it("Successfully logs in", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");

    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();

    // Verify successful login
    cy.contains("Logged In Successfully").should("be.visible");
  });
});
