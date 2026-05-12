//singleton
//Object.create

//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: 'Pari',
    "full name": "Pari Agrawal",
    [mySym]: "myKey",
    age: 19,
    location: "Mathura",
    email: 'pari.agrawal1314@gmail.com',
    isLoggedIn: false,
    lastLogindays: ['Monday', 'Saturday']
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "chatgpt@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "chatgpt@openai.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())
