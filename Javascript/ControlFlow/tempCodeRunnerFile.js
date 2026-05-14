myNums = [2,3,1,4,7,0,8,5]
let ans = myNums.forEach((item) => {
    return (item>4)
})
console.log(ans);

//so we use filter
let num1 = myNums.filter((item)=>{
    return (item>4)
})
console.log(num1);

//we use map if there is no condition but an operation to return
let cute = myNums.map((item) => {
    return item+10;
})
console.log(cute);

//Chaining
const result = myNums
                    .map((num) => num*10)
                    .map((num) => num/2)
                    .filter((num) => num>20)
console.log(result);