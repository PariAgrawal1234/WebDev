//truthy values
// "0", " ", [], 'false', {}, function(){}
// if(truthy values) run 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log( "Object is empty.");    
}

//Nullish Coalescing Operator
let val1 = null ?? 10;
let val1 = undefined ?? 10;
let val1 = undefined ?? 10 ?? 40;
console.log(val1);
