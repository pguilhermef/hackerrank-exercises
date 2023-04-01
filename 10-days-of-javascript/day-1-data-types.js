// Basically, the lesson here is about concatenation and receiving parameters. Getting values ​​by parameter and concatenating with constants in the function.

// Basicamente, a lição aqui é sobre concatenação e recebimento de parâmetros. Obtendo valores por parâmetro e concatenando com constantes na função

function performOperation(secondInteger, secondDecimal, secondString) {
const firstInteger = 4;
const firstDecimal = 4.0;
const firstString = 'HackerRank ';

let firstInt = parseInt(firstInteger)
let secondInt = parseInt(secondInteger)
console.log(firstInt + secondInt)

let firstDec= parseFloat(firstDecimal)
let secondDec = parseFloat(secondDecimal)
console.log(firstDec + secondDec)

console.log(firstString + secondString)
}

