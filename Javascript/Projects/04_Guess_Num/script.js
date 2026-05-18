let random = parseInt(Math.round(Math.random()*100 + 1));
const submit = document.querySelector('#submit');
const input = document.querySelector('#input');
const ary = document.querySelector('h4');
const rem = document.querySelector('#rem_guess');
const lORh = document.querySelector('#l_h');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
    submit.addEventListener('click',function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        validateGuess(guess);
    })
}
function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number.")
    }
    else if(guess < 1){
        alert("Please enter number > 0.")
    }
    else if(guess > 100){
        alert("Please enter number < 100.")
    }
    else{
        prevGuess.push(guess);
        if(numGuess >= 10){
            displayguess(guess);
            displaymsg(`Game Over. Random number was ${random}`);
            endgame();
        }
        else{
            displayguess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === random){
        displaymsg(`You Guessed it right.`);
        endgame();
    }
    else if(guess < random){
        displaymsg(`Your Number is tooo LOW!`);
    }
    else if(guess > random){
        displaymsg(`Your Number is tooo HIGH!`);
    }
}

function displayguess(guess) {
    input.value = '';
    ary.innerHTML += `${guess}  `;
    numGuess++;
    rem.innerHTML = `Guesses Remaining: ${10- numGuess}`
}

function displaymsg(msg) {
    lORh.innerHTML = `<h2>${msg}</h2>`;
}

function endgame() {
    input.value = '';
    input.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`
    startOver.appendChild(p);
    playGame = false;
    newgame();
}

function newgame() {
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click',function (e) {

        random = parseInt(Math.round(Math.random()*100 + 1));

        prevGuess = [];
        numGuess = 0;

        ary.innerHTML = `Previous Guesses: `;
        rem.innerHTML = `Guesses Remaining: ${10- numGuess}`;
        lORh.innerHTML = '';

        input.removeAttribute('disabled');

        startOver.removeChild(p);

        playGame = true;
    })
}
