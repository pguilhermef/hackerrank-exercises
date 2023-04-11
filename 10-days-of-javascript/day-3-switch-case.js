function getLetter(s) {
    let letter;

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstGroup = ['b', 'c', 'd', 'f', 'g'];
    const secondGroup = ['h', 'j', 'k', 'l', 'm'];  

    switch(true) {
        case vowels.includes(s[0]):
            letter = 'A'
            break;
        case firstGroup.includes(s[0]):
            letter = 'B'
            break;
        case secondGroup.includes(s[0]):
            letter = 'C'
            break;
        default:
            letter = 'D'
    }
    
    return letter;
}