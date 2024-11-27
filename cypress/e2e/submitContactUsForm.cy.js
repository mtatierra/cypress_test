Cypress.on("uncaught:exception", (err, runnable) => {
  console.error(err.stack);
  return false;
});

describe("Datacom Location Contact Us Page", () => {
  it("Successfully submits the contact form", () => {
    cy.visit("https://datacom.com/nz/en/");
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get(
      '.footer__link-list > [href="/nz/en/about-us/our-locations"]'
    ).click();
    cy.get("#cmp-mrkto-modal-thank-you").click();
    cy.get("#FirstName").type("Marvin");
    cy.get("#LastName").type("Tatierra");
    cy.get("#Email").clear().type("mtatierra.it@gmail.com");
    cy.get("#Phone").type("092778733046");
    cy.get("#Title").type("Test Automation Engineer");
    cy.get("#Company").type("ConnectOS");
    cy.get("#Country").select("Philippines");
    cy.get("#custom2").select("Careers");
    cy.get("#custom5").select("Experienced professional");
    cy.get("#custom7").clear().type("Test Automation");
    cy.get("#mktoForm_1846").submit();
    cy.get(
      "#thank-you > .aem-Grid > .heading > .cmp-title > .cmp-title__text"
    ).should("be.visible");
    cy.get(".cta-button > .cmp-cta-button > .cmp-cta-button__text").click();
  });
});
