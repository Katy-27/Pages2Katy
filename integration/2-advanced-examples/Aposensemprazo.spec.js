import acessar from "../2-advanced-examples/Pages2/Index2"
const el = require("../2-advanced-examples/Pages2/Elements2").TESOURO

describe('Simular Aposentadoria', () =>{
    
             
    it('Acessar Pagina',() =>{
           acessar.visitarpagina()
   
       })
   
       it('Simular',() =>{
           acessar.APOSENTADORIASEMPRAZO()
   
       })
       
   
   })