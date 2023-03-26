// I was given an array of candles, where each candle had a height represented by a number. The taller the candle, the higher the number in the corresponding array position.
// The challenge was to determine which candles had the greatest height and return the count of candles with that same height.

// Eu recebi um array de velas, onde cada vela tinha uma altura representada por um número. Quanto mais alta a vela, maior o número na posição correspondente do array.
// O desafio era determinar quais velas tinham a maior altura e retornar a contagem de velas com a mesma altura.

const candles = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]

function birthdayCakeCandles(candles) {
  let biggerNum = 0
  candles.reduce((accumulator, currentValue) => {
    if (currentValue > biggerNum) {
      biggerNum = currentValue;
    }
  }, 0)
  const array = candles.filter((candle) => candle === biggerNum)
  return array.length;
}

console.log(birthdayCakeCandles(candles))