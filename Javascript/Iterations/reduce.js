let myNums = [1,3,4,7,6,2]
const sumofArry = myNums.reduce((accumulator, currentValue) => {
    console.log(`${accumulator} and ${currentValue}`)
     return accumulator + currentValue
    }, 0
)

console.log(sumofArry);
