/*
Lendo do teclado
*/

const readline = require('readline-sync')   //comando para importar a biblioteca

nome = readline.question("Qual o seu nome?\n") // le a entrada do teclado e salva na variável "nome"
console.log("Seja bem vindo",nome,"!!")


