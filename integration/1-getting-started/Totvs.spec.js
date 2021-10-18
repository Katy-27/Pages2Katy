// <reference types="cypress"> />

describe('Desafio Totvs', () =>{
    it('Realizar uma pesquisa e adiconar ao carrinho',()=>{
    cy.visit('https://totvs.store/')
    cy.get('#btn-cookie-allow').click()
    cy.get('#search').type('Totvs RH{enter}')
    cy.get('[href="https://totvs.store/br/produto/treinamento-totvs-rh-linha-rm-reports-rh.html"] > .product-card-description').click()
    cy.get('#product-addtocart-button').click()
    cy.get('#proceed-to-checkout').click()
 });
});