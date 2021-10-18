/// <reference types="cypress" />


describe('Simulador-Aposentadoria', () =>{
    

    Cypress.on('uncaught:exception', (err, runnable) => {

        // returning false here prevents Cypress from

        // failing the test

        return false

    })
   

    it('Aposentadoria 3-9',() =>{

     cy.visit('https://www.tesourodireto.com.br/')
     cy.get('#onetrust-accept-btn-handler').click()
     cy.get('.td-menu-trigger').click()
     cy.get(':nth-child(4) > .td-nav__list-item__link').click()
     cy.get(':nth-child(4) > .td-nav__sublist > :nth-child(1) > .td-nav__sublist__link').click()
     cy.get('#start-simulation-button').click()
     cy.get('[data-objetivo="AP"]').click()
     cy.get('[data-prazo="M"]').click({force: true})
     cy.get('[data-perfil="PRF"]').click({force: true})
     cy.get('.tdsimu-center-button > .btn').click({force: true})
    })

})

it('Aposentadoria sem prazo',() =>{

    cy.visit('https://www.tesourodireto.com.br/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.td-menu-trigger').click()
    cy.get(':nth-child(4) > .td-nav__list-item__link').click()
    cy.get(':nth-child(4) > .td-nav__sublist > :nth-child(1) > .td-nav__sublist__link').click()
    cy.get('#start-simulation-button').click({force: true})
    cy.get('[data-prazo="N"]').click({force: true})
   })

