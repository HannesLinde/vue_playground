/// <reference types="cypress" />

describe('should test vuexBasics component', () => {
    beforeEach('visit site', () => {
        cy.visit('/vuex-basics');
    });

    describe('should load DOM content', () => {
        it('should find 8 h3 elements', () => {
            cy.get('h3').should('have.length', 8);
        });
    });

    describe('should update vuex values', () => {
        it('should react to increment button', () => {
            cy.get('[data-test="increment-button"').click().then(() => {
                cy.get('[data-test="increment-counter"').contains('3');
            });
        });
        it('should reset vuex counter value to 0 when clicking on "reset"', () => {
            cy.get('[data-test="reset-button"').click().then(() => {
                cy.get('[data-test="increment-counter"').contains('0');
            });
        })
    });
});