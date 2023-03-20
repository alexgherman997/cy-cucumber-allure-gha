import {
    Given,
    When,
    Then
} from '@badeball/cypress-cucumber-preprocessor';
import ActionsElement from '@pages/ActionsElement';
import Search from '@pages/Search';

const search = new Search();
const actionsElement = new ActionsElement();

Then('the {string} is displayed', (elemName) =>{
    cy.contains(elemName).scrollIntoView().should("exist").and("be.visible");
})