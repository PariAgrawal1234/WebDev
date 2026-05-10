const accountId = 144553 //value fixed - node.js won't let it change
let accountEmail = "pari@gmail.com" //declare variable only using this
var accountPass = "12345" //declare variable (old)
accountCity = "Jaipur" //not recommended to declare variable using this
let accountState

//accountId = "12256"
accountEmail = "radheradhe@gmail.com"
accountPass = "212121"
accountCity = "Delhi"

console.log(accountId)
console.log(accountEmail)
console.log(accountPass)
console.log(accountCity)

const account = [accountEmail, accountId, accountPass, accountCity, accountState]
console.table(account)