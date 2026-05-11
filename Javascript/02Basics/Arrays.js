const myArry = [2,4,6,8];

// console.log(myArry[0])
// //copy creates shallow copies(share same reference point as original)

// const myHeroes = new Array('shaktiman','captain america','batman');
// console.log(myHeroes)

//Array methods

// myArry.push(6)
// myArry.push(7)
// myArry.pop()

myArry.unshift(9) //inserts in the beginning (load on computer)
myArry.shift()

// console.log(myArry.includes(8)) //true
// console.log(myArry.indexOf(9)) //-1 (does not exists)

// console.log(myArry.join('*')) //converts in string and joins using whtvr symbol
// console.log(myArry)

//slice, splice
console.log("A ", myArry);
const newarry1 = myArry.slice(1,3) //does not change original arry
console.log(newarry1)
console.log("B ", myArry);
const newarry2 = myArry.splice(1,3) //changes original array
console.log(newarry2)
console.log("C ", myArry);