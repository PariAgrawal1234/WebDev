const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const othernum = 123.8975
console.log(othernum.toPrecision(4))
console.log(othernum.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-US'))
console.log(hundreds.toLocaleString('en-IN'))

//-----------------****-----------------//

console.log(Math);
console.log(Math.abs(-2))
console.log(Math.round(4.67))
console.log(Math.ceil(4.67))
console.log(Math.floor(4.67))
// console.log(Math.sqrt(0.025))

console.log(Math.random()) //always between 0 and 1
console.log((Math.floor(Math.random()*10)) + 1)

const min = 1
const max = 6
console.log(Math.ceil((Math.random() * (max - min + 1)) + min))