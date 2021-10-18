import acessar from "../Pages2/Index2"
const el = require("../Pages2/Elements2").TESOURO

describe('Sem prazo', () =>{
    
             
    it('Acessar Pagina',() =>{
           acessar.visitarpagina()
   
       })
   
       it('Pesquisar',() =>{
           acessar.APOSENTADORIASEMPRAZO()
   
       })
       
   
   })