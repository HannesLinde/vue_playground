/// <reference types="cypress" />

const inputOptions = [
    {
        name: 'Lisa',
        id: 1
    },
    {
        name: 'Hannes',
        id: 2
    },
    {
        name: 'Lutz',
        id: 3
    },
    {
        name: '??',
        id: 4
    },
]

const inputTypeHeadings = [
    'Text input',
    'Select input',
    'Checkboxes',
    'Radio buttons',
    'Color inputs',
    'Range input'
]

describe('Testing input site', () => {
    beforeEach(() => {
        cy.visit('/testing/inputs');
    });

    describe('should load DOM content', () => {
        it.only('should display headings', () => {
            cy.get('h4').each((heading, index) => {
                expect(heading.text()).to.equal(inputTypeHeadings[index]);
            });
        });
    });

    describe('should check various inputs on site', () => {
        it('should find a label for each checkbox', () => {
            cy.get('[data-test="checkbox-container"] label').each((checkboxCombo, index) => {
                // console.log(checkboxCombo.text(), inputOptions[index].name)
                expect(checkboxCombo.text()).to.equal(inputOptions[index].name);
            });
        });
        it('should find and control a checkbox input', () =>{
            cy.get('[data-test="checkbox-output"]').contains('None selected');
            cy.get('[data-test="checkbox-container"] input').each((checkboxCombo) => {
                // console.log(checkboxCombo.text(), inputOptions[index].name)
                cy.get(checkboxCombo).check();
            });
            cy.get('[data-test="checkbox-output"]').contains(inputOptions.map(option => option.name).join(', '));

            // cy.get('[data-test="checkbox-1"]').check();
            // cy.get('[data-test="checkbox-2"]').check();
            // cy.get('[data-test="checkbox-3"]').check();
            /*cy.get('[data-test="checkbox-output"]').then(checkboxOutput => {
                expect(checkboxOutput).to.contain('Lisa, Hannes, Lutz');
            });*/
        });
        it('should find and control a color input', () => {
            cy.get('[data-test="color-input-element"]')
                .invoke('val', '#abcdef')
                .trigger('input');
            cy.get('[data-test="color-output"]').contains('#abcdef');
        });
        it('should find and control range input', () => {
            cy.get('[data-test="range-input"]')
                .invoke('val', '7')
                .trigger('input')
                .then(el => {
                    expect(el).to.have.value('7');
                });
        });
    });
});
