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