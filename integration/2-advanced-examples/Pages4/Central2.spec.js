import acessar from "../Pages4/Index4"
const el = require("../Pages4/Elements4").TESOURO

describe('Palavra válida com aspas', () =>{
    
             
    it('Acessar Pagina',() =>{
           acessar.visitarpagina()
   
       })
   
       it('Pesquisar',() =>{
           acessar.PALAVRACOMASPAS()
   
       })
       
   
   })