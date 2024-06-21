Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
        cy.visit("login");
        cy.get('[type="email"]').type("renaniomes10@gmail.com");
        cy.get('[type="password"]').type("renan123");
        cy.get('button[type="submit"]').click();
    }
  
    login()
  })