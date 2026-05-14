//scope
let b = 300;
var c = 350;

if(true){
    const a = 50;
    let b = 60;
    var c = 40;
    console.log(`Inner b: ${b}`);
    console.log(`Inner c: ${c}`);
}
//var does not get defined in scope
// console.log(a);
console.log(`Global b: ${b}`); //global scope remains same
console.log(`Global c: ${c}`);

function one(){
    let name = "PARI";
    function two(){
        let site = "Youtube";
        console.log(name);        
    }
    // console.log(site);
    two();
}
one();


//-----------Hoisting-----------//

//could be printed before defining the function
console.log(twotimesnum(5)); 
function twotimesnum(num){
    return num*2;
}

//can store function in variable but can't be used before defining
const addtwo = function(num){
    return num+2;
}
console.log(addtwo(5))
