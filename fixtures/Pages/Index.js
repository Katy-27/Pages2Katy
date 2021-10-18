const el = require("../Pages/Elements").TESOURO

class acessar{

    visitarpagina(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false})

    cy.visit(el.SITE)
    cy.get(el.COOKIE).click();

    }

    APOSENTADORIACOMPRAZO(){
        cy.get(el.MENU).click()
        cy.get(el.TITULO).click({force: true})
        cy.get(el.SUBTITULO).click({force: true})
        cy.get(el.COMECO).click()
        cy.get(el.OBJETIVO).click({force: true})
        cy.get(el.PRAZO).click({force: true})
        cy.get(el.RETORNO).click()
        cy.get(el.RESULTADO).click()
       }
   
       //RETORNAR EM TELA POSSIBILIDADES DE ACORDO COM PERFIL
   
   
   }


export default new acessar