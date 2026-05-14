//Immediately invoked Function expressions (IIFE)

(function random1(){
    console.log("Hello Mister!");
})();

// (;) are important here
( (name) => {
    console.log("hello 2", name)
})("Pari");
