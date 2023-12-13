function calculateBMI(weight, height) {
    let BMi = weight / (height *  height);
    return BMi;
}

function getMeaningBMI(BMi) {
    if(BMi < 18.5) {
        console.log("underweight");
    }
    if(BMi >= 18.5 && BMi <= 24.9) {
        console.log("normalweight");
    }
    if(BMi > 25.0) {
        console.log("overweight");
    }
}