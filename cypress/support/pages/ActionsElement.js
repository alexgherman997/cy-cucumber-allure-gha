export default class ActionsElement {

    clickElement(elemName) {
        cy.contains(elemName).scrollIntoView().should("be.visible").click();
    }

    clickButton(buttonName) {
        cy.get(`button:contains(${buttonName})`)
            .scrollIntoView()
            .should("be.visible")
            .click();
    }

    clickButtonDataCy(dataCy) {
        cy.get(`[data-cy="${dataCy}"]`)
            .scrollIntoView()
            .should("be.visible")
            .click();
    }
}