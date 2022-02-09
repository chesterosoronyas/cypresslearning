describe("cy.task", () => {
  it("Get the host", () => {
    cy.task("DisplayHost", "localhost").should("equal", true);
    console.log(Cypress.env("host"));
  });
});
