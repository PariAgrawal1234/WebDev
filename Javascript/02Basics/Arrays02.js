const marvel_heroes = ['thor', 'ironman', 'spiderman'];
const dc_heroes = ['superman', 'flash', 'batman'];

// marvelheroes.push(dcheroes); //arry inside array 4th element is arry
// console.log(marvelheroes)

//console.log(marvel_heroes.concat(dc_heroes)) //concat won't change the original array but output will have both arrys combined

const allheroes = [...dc_heroes, ...marvel_heroes] //spread arrays using ...
// console.log(allheroes);

const arr1 = [1,2,3,[4,[5,6,[8,[9]]]], 7, [6,7,[4,5]]];
let myarr1 = arr1.flat(Infinity)
// console.log(myarr1)

// console.log(Array.from("Pari Agrawal"))
// console.log(Array.isArray("PariAgrawal"))

console.log(Array.from({name: "Pari Agrawal"})) //will give empty bracket

let score1 = 100;
let score2 = 200, score3 = 300;

console.log(Array.of(score1,score2,score3));