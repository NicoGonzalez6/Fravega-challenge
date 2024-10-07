describe("Should load the home page", () => {
  it("should navigate to the home page with the correct sections", () => {
    cy.visit("/");
    cy.get('[data-test-id="searchInputSection"]').should("be.visible");
    cy.get('[data-test-id="usersSection"]').should("be.visible");
  });
});
