///<reference types ="cypress" />

describe('Login', () =>{

    it('Fazer login', ()=>{
        cy.visit('https://www.cobasi.com.br/')

        cy.get('[data-push-left="off-0_md-1"] > .header__item > .account-url > .call-box').click()
        cy.get('.deslogado > .btn-primary').click()
        cy.get('#loginWithUserAndPasswordBtn').click()        
        cy.get('#inputEmail').type('kathlen354@gmail.com')
        cy.get('#inputPassword').type('826145By')
        cy.get('#vtexIdUI-form-classic-login > .modal-footer > #classicLoginBtn').click()
        cy.get('#Caminho_1309_00000163792573757093554480000003101382506143179919_').click()
        cy.get('.btn').click()
    });
    it('Pesquisa e filtro', ()=>{
        cy.visit('http://www.cobasi.com.br/') 
        cy.get('.fulltext-search-box').type('Roupa de inverno')
        cy.get('.btn-buscar').click()
        cy.get(':nth-child(15) > .shelf-wrapper > .data > h3 > a > span').click()
        cy.get('.sku__selector').select('data-skuid="979716')
        cy.get('.button__wrapper > .btn').click()
        cy.get('.d-none > .btn').click()
        
})

   });