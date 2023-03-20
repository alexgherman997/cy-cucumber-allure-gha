export default class Search {
    typeInSearch(product) {
        cy.get('[data-cy="search-input"]')
        .clear()
        .type(product);
    }

    cancel() {
        cy.get("[data-cy='cancel']").should("be.visible").click();
      }
      
}