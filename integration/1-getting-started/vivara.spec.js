///<reference types ="cypress" />

describe('Pesquisa imagem', () =>{

    it('Pesquisar', ()=>{
        cy.visit('https://www.dandarajoias.com.br/')
        cy.get('.banner-home-slide > .slick-list > .slick-track > .slick-current > a > img').click()
        cy.get('.resultadoBuscaHeader > .row > :nth-child(3) > a > img').click()
        cy.get('.buy-button').click()
        cy.get('.srp-data > #shipping-calculate-link').click()
        cy.get('#ship-postalCode').type('13295322')
        cy.get('#cart-to-orderform').click()
        cy.get('#client-pre-email').type('kety-27@hotmail.com')
        cy.get('#btn-client-pre-email').click()
        cy.get('#client-first-name').type('Luna')
        cy.get('#client-last-name').type('Vasconcelos')
        cy.get('#client-aniversario').select('Novembro')
        cy.get('#client-document').type('46124701847')
        cy.get('#client-phone').type('1938481186')
        cy.get('#go-to-shipping').click()



    })


});