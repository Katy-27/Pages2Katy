///<reference types ="cypress" />

describe('Pesquisa e filtro', () =>{

    it('Pesquisa e filtro', ()=>{
        cy.visit('https://www.ziovara.com.br/')
        cy.get('#search').type('God Is a Woman')
        cy.get('.titlep').click()
        cy.get('#cor_14105').click()
        cy.get('.botao-commerce').click()
        cy.get('#cart-shipping').type('13295322')
        cy.get('.ch-btn-default').click()
        cy.get(':nth-child(2) > .link-category > .text-category').click()
        cy.get('#select_ordem').select('Menor Preço')
    });

       it('Login não cadastrado', ()=>{
        cy.visit('https://www.ziovara.com.br/') 
        cy.get('[href="/central-do-cliente"] > .icon > .path2').click()
        cy.get('p > .bt-efetua-login > .image').click()
        cy.get('#input-email').type('kety-27@hotmail.com')
        cy.get('#tray-login-identify').click()
        cy.get('#input-password').type('230Ksx#0')
        cy.get('#password-submit').click()
     })

   });