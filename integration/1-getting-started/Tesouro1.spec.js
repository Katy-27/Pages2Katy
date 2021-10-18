/// <reference types="cypress" />


describe('Blog', () =>{
    

    Cypress.on('uncaught:exception', (err, runnable) => {

        // returning false here prevents Cypress from

        // failing the test

        return false

    })
   

    it('Fazer comentário e-mail inválido',() =>{

     cy.visit('https://www.tesourodireto.com.br/')
     cy.get('#onetrust-accept-btn-handler').click()
     cy.get('.td-menu-trigger').click()
     cy.get(':nth-child(7) > .td-nav__list-item__link').click()
     cy.get('.td-blog-destaque__title').click({force: true})
     cy.get('#nome').type('Fernanda')
     cy.get('#email').type('k@gmail.com')
     cy.get('#commentText').type('Olá, obrigada pelas dicas')
     cy.get('.td-blog-post__avaliacoes__star > svg').click({force: true})
     cy.get('.td-blog-post__avaliacoes__star > svg').click({force: true})
     cy.get('#sendButton').click()
    })


})

