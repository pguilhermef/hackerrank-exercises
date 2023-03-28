// The challenge here is sum the firsts and the second diagonals and return the different between then. (The size can be bigger than 3).

// O desafio aqui é somar a primeira e a segunda diagonal e retornar a diferença entre elas. (O tamanho pode ser maior que 3).

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];

const x = [];
const y = [];
const lineLength = array.length - 1

array.reduce((acc, _curr, index) => {
  x.push(array[index][index]);
  y.push(array[index][acc]);
  return (acc - 1);
}, lineLength)

const sumOfX = x.reduce((acc, curr) => acc + curr);
const sumOfY = y.reduce((acc, curr) => acc + curr);

return(Math.abs(sumOfX - sumOfY));

