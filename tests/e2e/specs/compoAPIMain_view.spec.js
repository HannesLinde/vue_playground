/// <reference types="cypress" />

describe('Testing composition API site', () => {
    beforeEach(() => {
        cy.visit('/composition-api');
        cy.get('[data-test="compo-api-main"]').as('main-container');

    });

    describe('should load DOM content', () => {
        it('should render a p-tag with id "compo-api-intro"', () => {
            cy.get('@main-container').find('#compo-api-intro');

        });

        it('should display current item count', () => {
            cy.get('[data-test="add-item-button"]').then(itemButton => {
                const clicks = 5;
                for (let click = 1; click <= clicks; click++) {
                    cy.get('[data-test="add-item-button"]').click().then(itemButton => {
                        expect(itemButton.text()).to.contain(`${click}`);
                    });
                };
            });

        });
    });
});
