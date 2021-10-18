import acessar from "../2-advanced-examples/Pages1/Index1"
const el = require("../2-advanced-examples/Pages1/Elements1").TESOURO

describe('Simular Aposentadoria 3-9', () =>{
    
             
    it('Acessar Pagina',() =>{
           acessar.visitarpagina()
   
       })
   
       it('Simular',() =>{
           acessar.APOSENTADORIACOMPRAZO()
   
       })
       
   
   })