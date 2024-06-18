/// <reference types="Cypress" />

describe("Dashboard", function () {
    beforeEach(function () {
      cy.visit("./src/components/main/main.js");
    });
  
    it("verifica o título da aplicação", function () {
      cy.title().should("be.equal", "Ingressos");
    });
  });
  