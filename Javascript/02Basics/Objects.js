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
