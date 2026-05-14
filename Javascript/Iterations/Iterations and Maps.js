//Maps

const countries = new Map();
countries.set("IN", "India");
countries.set("USA", "America");
countries.set("SK", "South Korea");

for(const [key, val] of countries){
    console.log(key, ":-", val);    
}

//iterating objects

const languages = {
    cpp : "c++",
    Rb: 'Ruby',
    js: 'Javascript',
    swift: 'swift for apple'
}

for(const key in languages){
    console.log(`${key} represants ${languages[key]} language.`);
}

//iterating arrays

const myarry = ['Pari', 'Kanak', 'Abhay', 'Akshay'];

for(const key in myarry){
    console.log(myarry[key]);
    
}

myarry.forEach(function(name){
    console.log(name);
})

myarry.forEach( (names) => {
    console.log(names);
})

myarry.forEach( (names, indx, arry) => {
    console.log(indx, names , arry);
})

//Iterating arrays with objects like one from databases

const myobjarry = [
    {
        languageSym : 'Js',
        LanguageName : 'Javascript'
    },
    {
        languageSym : 'Py',
        LanguageName : 'Python'
    },
    {
        languageSym : 'Rb',
        LanguageName : 'Ruby'
    },
]

myobjarry.forEach((item, indx, objects) =>{
    console.log(item.languageSym);
})


//-------------------*****************--------------------//
//but we cannot return any value in foreach loop.. example-
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
                    .filter((num) => num>=20)
console.log(result);


