// console.log(2 >= 1)
// console.log("2" >= 1)
// console.log("02" >= 1)

//unpredictable results when diff datatypes
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// === checks datatypes as well
console.log(2 === "2")

let Id = Symbol("123")
let anotherId = Symbol("123")

console.log(Id == anotherId)