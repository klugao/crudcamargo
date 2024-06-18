/// <reference types="Cypress" />

describe("Tela login", function () {
  beforeEach(function () {
    cy.visit("login");
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Ingressos");
  });

  it("preenche os campos obrigatórios e envia o formulário", function () {
    cy.get('[type="email"]').type("renaniomes10@gmail.com");
    cy.get('[type="password"]').type("renan123");
    cy.get('button[type="submit"]').click();
    cy.contains('Feed de Eventos');
  });

  it("retorna erro ao preencher os campos obrigatórios e envia o formulário", function () {
    cy.get('[type="email"]').type("teste@gmail.com");
    cy.get('[type="password"]').type("teste");
    cy.get('button[type="submit"]').click();
    cy.contains("p", "Usuário ou senha inválidos").should("be.visible");
  });
});
