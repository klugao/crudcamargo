describe('CRUD', () => {
    beforeEach(() => {
        cy.login()
        cy.get('[href="/perfil"]').click()
        cy.get('.sc-eDLKkx').click()
    });
    it('Criar evento', () => {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
    
        const formattedDate = `${day}/${month}/${year}`;
        cy.get('.sc-khjJXk').click()
        cy.get(':nth-child(2) > .sc-blmEgr').type("teste automatizado")
        cy.get('.sc-ifyrAs').type("teste automatizado")
        cy.get(':nth-child(4) > .sc-blmEgr').type(formattedDate)
        cy.get(':nth-child(5) > .sc-blmEgr').type("teste automatizado")
        cy.get(':nth-child(6) > .sc-blmEgr').type("9.999,99")
        cy.get('.sc-fmKFGs > .sc-dJGMql').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Publicação criada com sucesso!`)
          })
    });
    it('Atualizar evento', () => {
        const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 1);
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
    
        const formattedDate = `${day}/${month}/${year}`;
        cy.get('.sc-hIPBNq > :nth-child(2) > :nth-child(2) > :nth-child(1)').click()
        cy.get(':nth-child(2) > .sc-blmEgr').clear().type("teste automatizado 2")
        cy.get('.sc-ifyrAs').clear().type("teste automatizado 2")
        cy.get(':nth-child(4) > .sc-blmEgr').clear().type(formattedDate)
        cy.get(':nth-child(5) > .sc-blmEgr').clear().type("teste automatizado 2")
        cy.get(':nth-child(6) > .sc-blmEgr').clear().type("2")
        cy.get('.sc-fmKFGs > .sc-dJGMql').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Publicação atualizada com sucesso!`)
          })
    });
    it('Excluir evento', () => {
        cy.get('.sc-hIPBNq > :nth-child(2) > :nth-child(2) > :nth-child(2)').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Publicação deletada com sucesso!`)
          })
    });
});