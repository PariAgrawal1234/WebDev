const name = "Pari Agrawal"
const age = 19

console.log(name + age + " Value")

console.log(`Hello! My name is ${name}. And I am ${age} years old.`)

const GameName = new String("Free fire")
console.log(GameName) //when done in browser has multiple methods
console.log(GameName[0])
console.log(GameName.__proto__)
console.log(GameName.length)
console.log(GameName.toUpperCase())
console.log(GameName.charAt(3))
console.log(GameName.indexOf('e'))

let newString = GameName.substring(0,4)
console.log(newString)
newString = GameName.slice(-4, 7)
console.log(newString)

newString = "     Pari     " //too many extra spaces
console.log(newString.trim())

const url = "https://www.youtube.com/watch?v=sscX432bMZo&t=4304s"
console.log(url.replace("watch", "Why"))
console.log(url.includes("youtube"))

console.log(name.split(' '))

