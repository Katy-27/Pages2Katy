/// <reference types="cypress" />


describe('Central de atendimento', () =>{
    

    Cypress.on('uncaught:exception', (err, runnable) => {

        // returning false here prevents Cypress from

        // failing the test

        return false

    })
   

    it('Caracter',() =>{

     cy.visit('https://www.tesourodireto.com.br/')
     cy.get('#onetrust-accept-btn-handler').click()
     cy.get('.td-menu-trigger').click()
     cy.get(':nth-child(5) > .td-nav__list-item__link').click()
     cy.get('.td-notification__icon--close').click({force: true})
     cy.get('#field-search-question-list').click({force: true})
     cy.get('#field-search-question-list').type('@#')

     

     })

     it('Palavra válida com aspas',() =>{

        cy.visit('https://www.tesourodireto.com.br/')   
        cy.get('#onetrust-accept-btn-handler').click()   
        cy.get('.td-menu-trigger').click()   
        cy.get(':nth-child(5) > .td-nav__list-item__link').click()   
        cy.get('.td-notification__icon--close').click({force: true})   
        cy.get('#field-search-question-list').click({force: true})
        cy.get('#field-search-question-list').type('"lei')
     })

     it('Palavra válida sem aspas',() =>{

        cy.visit('https://www.tesourodireto.com.br/')   
        cy.get('#onetrust-accept-btn-handler').click()   
        cy.get('.td-menu-trigger').click()   
        cy.get(':nth-child(5) > .td-nav__list-item__link').click()   
        cy.get('.td-notification__icon--close').click({force: true})   
        cy.get('#field-search-question-list').click({force: true})
        cy.get('#field-search-question-list').type('investir')
     })

     it('Pesquisar por palavra inválida',() =>{

        cy.visit('https://www.tesourodireto.com.br/')   
        cy.get('#onetrust-accept-btn-handler').click()   
        cy.get('.td-menu-trigger').click()   
        cy.get(':nth-child(5) > .td-nav__list-item__link').click()   
        cy.get('.td-notification__icon--close').click({force: true})   
        cy.get('#field-search-question-list').click({force: true})
        cy.get('#field-search-question-list').type('lá')
     })


})