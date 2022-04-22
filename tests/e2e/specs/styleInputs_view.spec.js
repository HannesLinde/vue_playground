/// <reference types="cypress" />

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/css-styles/inputs');
  });

  describe('should load DOM content', () => {
    it('should display headings', () => {
      cy.get('h2').should('not.be.empty');
    });
  })

  describe('should select a checkbox and verify it', () => {
    const meal = [
      {
        name: "Pizza",
        selected: false,
      },
      {
        name: "Spaghetti",
        selected: false,
      },
      {
        name: "Caesar's salad",
        selected: false,
      },
    ]
    it('should display all checkbox label texts', () => {
      cy.get('[data-test="checkbox-container"]').find('p').each( (paragraph, index) => {
        expect(paragraph).to.include.text(meal[index].name);
      });
    });

    it('should select a checkbox and it should be checked', () => {
      cy.get('input[type="checkbox"]').as('checkbox').check();
      cy.get('@checkbox').should('be.checked');
    });

    it('should select a checkbox and its value should be set to true', () => {
      cy.get('input[type="checkbox"]').as('checkbox').check().then(checkbox => 
        expect(checkbox).to.have.value('true')
      );
    });
  });
  
  describe('test range input', () => {
    it('should set the range and verify it', () => {
      cy.get('[data-test="range-input"]').invoke('val', '7').trigger('input').then(el => {
        expect(el).to.have.value('7');
      })
    })
  })
});
