import {Game} from './classes/game.js'

// var msg = new SpeechSynthesisUtterance('Hello World');
// msg.lang = 'en-US';
// window.speechSynthesis.speak(msg);

const form = document.querySelector('#form');
const btnPlay = document.querySelector('#btnPlay');
let correctWord = '';


form.onsubmit = function checkIfGuessedWordMatchesTheCorrectWord(evt){
    // Stops the from from sending a post request
    evt.preventDefault()

    const userInput = document.querySelector('#userWordGuess');
    const userGuess = Game.getInputValue(userInput);
    const haveUserGuessedCorrect = Game.checkIfGuessedWordMatchesCorrectWord(userGuess, correctWord);
    if(haveUserGuessedCorrect){
        alert('Yay!');
    } else {
        alert('Nay!');
    }
}

btnPlay.onclick = function startANewGame(evt){
    evt.preventDefault()
    console.log('hi');
    
    correctWord = Game.getNewWord();
    Game.sayWordOutLoud(correctWord);
}

