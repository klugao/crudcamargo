/// <reference types="Cypress" />

describe("Dashboard", function () {
    beforeEach(function () {
      cy.visit("");
    });
  
    it("verifica o título da aplicação", function () {
      cy.title().should("be.equal", "Ingressos");
    });
    
    it("verifica se está na main", function () {
      cy.contains('Feed de Eventos')
    });
  });
  