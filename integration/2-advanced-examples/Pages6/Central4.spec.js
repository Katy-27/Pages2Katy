import acessar from "../Pages6/Index6"
const el = require("../Pages6/Elements6").TESOURO

describe('Palavra sem aspas', () =>{
    
             
    it('Acessar Pagina',() =>{
           acessar.visitarpagina()
   
       })
   
       it('Pesquisar',() =>{
           acessar.SEMASPAS()
   
       })
       
   
   })