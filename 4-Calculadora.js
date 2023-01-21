/*
Trabalhndo com entradas e retornando valores.
Calcladora básica
*/

//Importar as bibliotecas
const readline = require('readline-sync')   //comando para importar a biblioteca

//Declaração das variáveis Globais e leturas
var numA = readline.questionFloat("Digite o primeiro valor:") // le um valor de entrada
var numB = readline.questionFloat("Digite o segundo valor:") // le um valor de entrada
var op = readline.question("Digite a operacao:") // le a operação a ser executada
var result


if (op == ("soma" || "mais" || "adição" || "+")){
    result = numA + numB
}else if (op == ("sub" || "menos" || "subtação" ||"-")){
    result = numA - numB
}else if (op == ("mult" || "multiplicação" || "*")){
    result = numA * numB
}else if (op == ("div" || "divisão" || "/")){
    result = numA / numB
}else {
    console.log("Operação não suportada, seu burro!!")
}

if (result != null){
    console.log("Resultado =", result,"\n")
}

