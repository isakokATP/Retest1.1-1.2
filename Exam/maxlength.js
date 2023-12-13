function getMaxLengthString(arrayOfString) {
    let a = [];
    if(arrayOfString === null || arrayOfString === undefined) {
        return undefined;
    }
    return arrayOfString.reduce((a, b) => (a.length > b.length ? a : b));
}

let array1 = ["hello", "hi", "hey"];
let array2 = ["suck", "hello", "Halo"]
 console.log(getMaxLengthString(array2));