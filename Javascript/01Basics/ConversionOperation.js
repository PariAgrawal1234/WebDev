// let score = "33abc"
// score = null
// score = undefined
score = true

console.log(typeof score)
console.log(typeof(score))
console.log(typeof Number(score))
console.log(Number(score))

//"33" -> 33
// "33abc" -> NaN
// true -> 1
// null -> 0
// undefined -> NaN

let isLoggedin = ""
let booleanisLoggedin =  Boolean(isLoggedin)
console.log(booleanisLoggedin)

let value = 3
let negValue = -(value)
console.log(negValue)
console.log(typeof(negValue))

let str1 = "Hello!"
let str2 = " Myself Pari"
console.log(str1+str2)

//works in sequence
console.log("1" + 2 + 2) //treated as string
console.log(1 + 2 + "2") //added number then treated as string

//some conversions that you should avoid (definitely)
console.log(+true)
console.log(+"")

let gamecounter = 100
gamecounter++
console.log(gamecounter)