/// <reference types="cypress" />


describe('Simulador-Casa Nova', () =>{
    

    Cypress.on('uncaught:exception', (err, runnable) => {

        // returning false here prevents Cypress from

        // failing the test

        return false

    })
   

    it('Casa Nova 10+',() =>{

     cy.visit('https://www.tesourodireto.com.br/')
     cy.get('#onetrust-accept-btn-handler').click()
     cy.get('.td-menu-trigger').click()
     cy.get(':nth-child(4) > .td-nav__list-item__link').click()
     cy.get(':nth-child(4) > .td-nav__sublist > :nth-child(1) > .td-nav__sublist__link').click()
     cy.get('#start-simulation-button').click()
     cy.get('[data-objetivo="IM"]').click({force: true})
     cy.get('[data-prazo="L"]').click({force: true})
     cy.get('[data-perfil="POF"]').click({force: true})
     cy.get('[data-remuneracao="1"]').click({force: true})
     cy.get('.tdsimu-center-button > .btn').click()

    })

    it('Casa Nova 1-3',() =>{

        cy.visit('https://www.tesourodireto.com.br/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.td-menu-trigger').click()
        cy.get(':nth-child(4) > .td-nav__list-item__link').click()
        cy.get(':nth-child(4) > .td-nav__sublist > :nth-child(1) > .td-nav__sublist__link').click()
        cy.get('#start-simulation-button').click()
        cy.get('[data-objetivo="IM"]').click({force: true})
        cy.get('[data-prazo="C"]').click({force: true})
        cy.get('[data-perfil="PRF"]').click({force: true})
        cy.get('.tdsimu-center-button > .btn').click({force: true})  
       })
   
   
   })
