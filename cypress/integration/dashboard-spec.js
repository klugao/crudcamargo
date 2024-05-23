/// <reference types="Cypress" />

describe("Tela login", function () {
    beforeEach(function () {
      cy.visit("http://localhost:3000/");
    });
  
    it("verifica o título da aplicação", function () {
      cy.title().should("be.equal", "Ingressos");
    });
  });
  