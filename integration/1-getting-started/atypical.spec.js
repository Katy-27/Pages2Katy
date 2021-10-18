///<reference types ="cypress" />

describe('Pesquisa', () =>{

    it('Pesquisar livro a menina do outro lado', ()=>{
        cy.visit('https://www.darksidebooks.com.br')
        cy.get('#search').type('Warren')
        cy.get('.resultadoBuscaHeader > .row > :nth-child(3) > a > img').click()
    })


});