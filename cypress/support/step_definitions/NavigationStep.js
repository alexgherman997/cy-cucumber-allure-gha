import {
    Given,
    When,
    Then
} from '@badeball/cypress-cucumber-preprocessor';
import ActionsElement from '@pages/ActionsElement';
import Search from '@pages/Search';

const search = new Search();
const actionsElement = new ActionsElement();

When('wait for {int} seconds', (seconds) =>{
    cy.wait(seconds * 1000);
})

When('search for product {string}', (product) =>{
    search.typeInSearch(product);
})

When(`clicks on the {string} link`, (elemName) => {
    actionsElement.clickElement(elemName);
});

When(`clicks on the {string} button`, (buttonName) =>{
    actionsElement.clickButton(buttonName);
})

When('clicks on the {string} button data-cy', (dataCy) => {
    actionsElement.clickButtonDataCy(dataCy);
 });
