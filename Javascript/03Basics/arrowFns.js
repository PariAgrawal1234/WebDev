const user = {
    username : "pari",
    age : 19,
    gender : "female",
    welcomemsg: function(){
        console.log(`${this.username} has logged in to the website.`);
    }
}
// user.welcomemsg();
user.username = "Seema"
// user.welcomemsg();

// function random(){
//     let user = "pari";
//     console.log(this);
// }
// random();
//gives details about this function

const random = () => {
    console.log(this)
}
// random();
//returns empty paranthesis {}

// const addtwo = (num1,num2) => (num1 + num2); //Implicit
const addtwo = (num1,num2) => {
    return num1 + num2; //explicit
}
console.log(addtwo(2,8));

const printName = () => ({username: "Pari Agrawal"})
console.log(printName().username);
