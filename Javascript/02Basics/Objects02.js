const tinderUser = new Object(); //singleton
// const tinderUser = {} //literal object

tinderUser.id = "123abc";
tinderUser.name = "Pari";
tinderUser.isloggedin = false;

// console.log(tinderUser);

const regularUser = {
    email: "sum@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Pari",
            lastName: "Agrawal"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.lastName)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

//when you get data from server it comes in following format(objects inside array)

const users = [
    {
        id: 1,
        email: "suresh@gmail.com"
    },
    {
        id: 2,
        email: "mahesh@gmail.com"
    },
    {
        id: 3,
        email: "dinesh@gmail.com"
    },
    {
        id: 4,
        email: "ramesh@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedin'));



//-----------Destructuring the Objects--------------//

const course ={
    courseName : "Javascript Basics",
    price : 999,
    courseInstructor : "Chai aur code"
}

const {courseInstructor : Instructor} = course;
console.log(Instructor);

//------APIs----------//
// {
//     courseName = "js lectures",
//     price = "free",
//     Instructor = "Ramesh"
// }

//above file is not an onject rather its treated as Json
//array apis

// [
//     {},
//     {},
//     {}
// ]