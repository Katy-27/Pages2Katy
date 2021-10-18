///<reference types ="cypress" />

describe('Validate Tests', () =>{

    it('Deve inserir uma conta', ()=>{
        cy.visit('http://barrigareact.wcaquino.me')

        cy.get('[data-test=email]').type('tarscisio@cy.com')
        cy.get('[data-test=passwd]').type('1')
        cy.get('[.btn]').click()
        
        cy.get('.toast').should('be.visible')
        .and('contain','Bem vindo, tarcisio')

        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()

        cy.get('data-test=nome]').type('Contas de Testes')
        cy.get('.btn').click()

        cy.get('toast-sucess').should('be.visible')
        .and('contain','Cona inserida com sucesso')
})

   });