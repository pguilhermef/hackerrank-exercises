function vowelsAndConsonants(s) {
    for (let index = 0; index < s.length; index++) {
      if (s[index] === 'a' || s[index] === 'e' || s[index] === 'i' || s[index] === 'o' || s[index] === 'u') {
        console.log(s[index])
      }
    }

    for (let index = 0; index < s.length; index++) {
      if (s[index] !== 'a' && s[index] !== 'e' && s[index] !== 'i' && s[index] !== 'o' && s[index] !== 'u') {
        console.log(s[index])
      }
    }

}