import acessar from "../Pages1/Index1"
const el = require("../Pages1/Elements1").TESOURO

describe('Com prazo', () =>{
    
             
    it('Acessar Pagina',() =>{
           acessar.visitarpagina()
   
       })
   
       it('Pesquisar',() =>{
           acessar.APOSENTADORIACOMPRAZO()
   
       })
       
   
   })