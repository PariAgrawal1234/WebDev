//dates

const myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleDateString())

let createDate = new Date(2026,0,10, 17, 8)
createDate = new Date("10-Jan-26")
console.log(createDate.toLocaleString())

let timestamp = Date.now(); //0 milliseconds ellapsed on 1 Jan 1970, 12:00 am
console.log(timestamp)
console.log(createDate.getTime())

//to get time in seconds instead of milliseconds
console.log(Math.round(Date.now()/1000))

// to print inline use `{Math.round(Date.now()/1000)} is the value of miliseconds from 1 jan 1970`

newDate.toLocaleString('default',{
    weekday: "long"
})