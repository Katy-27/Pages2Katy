///<reference types ="cypress" />

describe('Pesquisa', () =>{

    it('Pesquisar livro a menina do outro lado', ()=>{
        cy.visit('https://www.darksidebooks.com.br')
        cy.get('#search').type('A menina do outro lado')
        cy.get('.resultadoBuscaHeader > .row > :nth-child(1) > a > img').click()
        
    });