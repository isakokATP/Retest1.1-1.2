function fillStartWord(startword, word) {
    let a = startword + word;
    if(word === null || word === undefined) {
        return undefined;
    } 
    if(word.includes(startword)){
        return word;
    }
    return a;
}

console.log(fillStartWord("1", "startBlitch"));