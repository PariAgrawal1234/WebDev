function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("I");
}

// sayMyName();

function addNums(num1, num2){
    console.log("num1"+"num2");   
    return num1+num2; 
}
// const result = addNums(3,5);
// addNums();
// console.log(result);

function UserLoginMsg( username){
    if(username === undefined){
        console.log("Enter a valid name.");
        return;
    }
    return (`${username} just logged in.`)
}
console.log(UserLoginMsg());


//-----Shopping cart problem------// (unknown number of input variables)
function calculateCartPrice(...num1){ //used rest/spread operator
    return num1;
}
console.log(calculateCartPrice(100,500,650));

Item = {
    type: "Table Fan",
    company: "BAJAJ",
    price: 750,
    color: "white"
}

function handleObj(obj){
    console.log(`Item is a ${obj.type} of ${obj.company}, priced for ${obj.price} Rs and is of ${obj.color} color.`);
}

handleObj(Item);