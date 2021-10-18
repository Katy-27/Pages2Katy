Funcionalidade: Busca em dúvidas frequentes 
 A fim de pesquisar na barra busca por dúvidas frequentes
 Como um cliente
 Eu quero poder pesquisar por nome e/ou caracter
 De modo a conseguir auxílio em minha dúvida
 conforme os itens de busca que utilizei

 Cenario: Pesquisar por palavra inválida
  Dado que estou como cliente e pesquisando dúvidas frequentes
   Quando pesquiso uma palavra 
   Entao devo receber a mensagem "Nenhum resultado encontrado"


 Cenario: Pesquisar apenas por palavra válida sem aspas
  Dado que estou como cliente e pesquisando dúvidas frequentes
   Quando pesquiso por palavra válida
   Entao devo receber mensagem "Sua pesquisa por “investir” encontrou 12 resultados" compatível 
   com palavra inserida


 Cenario: Pesquisar por palavra válida com aspas duplas no começo
  Dado que estou como cliente e pesquisando dúvidas frequentes
   Quando pesquiso por nome válido
   E inicio com duas aspas duplas
   Entao devo receber mensagem "Sua pesquisa por lei não encontrou resultados"

  Cenario: Pesquisar por caracter especial
  Dado que estou como cliente e pesquisando dúvidas frequentes
   Quando pesquiso na barra busca
   E nome inválido contendo caracteres especiais
   Entao devo receber a mensagem "Sua pesquisa não encontrou resultado"

  
