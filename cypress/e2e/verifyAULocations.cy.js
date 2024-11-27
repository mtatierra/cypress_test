Cypress.on("uncaught:exception", (err, runnable) => {
  console.error(err.stack);
  return false;
});

describe("Verify Location", () => {
  it("Checks the location for Australia", () => {
    cy.visit("https://datacom.com/nz/en/");
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get(
      '.footer__link-list > [href="/nz/en/about-us/our-locations"]'
    ).click();

    cy.xpath(`//li[contains(text(),'Australia')]`).click();
    cy.xpath(`//li[contains(text(),'Australia')]`)
      .invoke("text")
      .then((text) => text.trim())
      .should("eq", "Australia");

    const places = [
      "Adelaide",
      "Brisbane",
      "Canberra",
      "Melbourne",
      "Modbury",
      "Perth",
      "Sydney — Denison Street",
      "Townsville",
    ];
    places.forEach((place) => {
      cy.xpath(`//div[normalize-space()="${place}"]`).should("exist");
    });
  });
});
