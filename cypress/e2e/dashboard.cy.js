/// <reference types="Cypress" />

describe("Home", function () {
    beforeEach(function () {
      cy.visit("/");
    });
  
    it("verifica o título da aplicação", function () {
      cy.title().should("be.equal", "Ingressos");
    });

    it('home page', () => {
      cy.get('.sc-kFCroH > [href="/"]').click()
      cy.contains("Feed de Eventos")
      cy.get('.sc-jsEeTM > h1').click()
      cy.contains("Feed de Eventos")
    });
  });
  