const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 146.26;
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.00556;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };