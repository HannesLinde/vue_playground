/// <reference types="cypress" />

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  describe('should load DOM content', () => {
    it('should display h1', () => {
      cy.get('[data-test="home-heading"]').should('not.be.empty');
    });

    it('should display welcome text', () => {
      cy.get('[data-test="welcome-text"]').contains('on this website I collected the knowledge on VueJS that I gained');
    })
  })
});
