// // The problem to be solved here is to look at each student's grade and count the difference from the current grade to the next divisor number of five. Example: the next divisor of 5 after 70 is 75, so if there is 73 as a note, there are 2 numbers left for the next divisor. If 2 numbers are missing, the teacher rounds the grade to the next divisor. If it is a difference from 3, the note remains as it is. If the grade even with rounding is below 40, the result must be the student's original result.

// O problema a ser resolvido aqui é olhar cada nota do aluno e contar a diferença da nota atual para o próximo número divisor de cinco. Exemplo: o próximo divisor de 5 após o 70 é o 75, logo, se existe 73 como nota, faltam 2 números para o próximo divisor. Caso faltem de 2 números para baixo, o professor arredonda a nota para o próximo divisor. Caso seja uma diferença de a partir 3, a nota fica como está. Se a nota mesmo com arredondamento fica abaixo de 40, o resultado deve ser a pontuação original do aluno.

const grades = [73, 67, 38, 33];
const newGrade = [];
const minGrade = 40;

grades.reduce((acc, curr) => {
  const previousMultiplication = (Math.floor(curr / 5)) * 5
  const nextMultiplication = previousMultiplication + 5;
  const numbersLeftForTheNextDivisor = nextMultiplication - curr
  const roundedNumber = curr + numbersLeftForTheNextDivisor

  if(numbersLeftForTheNextDivisor >= 3 || roundedNumber < minGrade) {
    newGrade.push(curr)
  } else {
    newGrade.push(roundedNumber)
  }

  return acc += 1
}, 0)

return newGrade;
