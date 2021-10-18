///<reference types ="cypress" />

describe('Filtro e pesquisa', () =>{

    it('Filtrar e pesquisar', ()=>{
        cy.visit('https://www.ziovara.com.br/') 
        cy.get(':nth-child(2) > .link-category > .text-category').click()
        cy.get('#select_ordem').select('Menor Preço')
        cy.get('#search').type('God Is a Woman')
        cy.get('.titlep').click()
        cy.get('#cor_14105').click()
        cy.get('.botao-commerce').click()
        cy.get('#cart-shipping').type('13295322')
        cy.get('.ch-btn-default').click()
        
     })

   });