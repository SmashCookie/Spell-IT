import {Game} from './classes/game.js'

const form = document.querySelector('#form');
const btnPlay = document.querySelector('#btnPlay');
const btnHearWordAgain = document.querySelector('#btnHearWordAgain');
let correctWord = '';

const playWord = function (wordToPlay) {
    Game.sayWordOutLoud(wordToPlay);
}

form.onsubmit = function checkIfGuessedWordMatchesTheCorrectWord(evt){
    // Stops the from from sending a post request
    evt.preventDefault()

    const userGuess = Game.getInputValue('#userWordGuess');
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
    playWord(correctWord);
}

btnHearWordAgain.onclick = function hearWordAgain(){
    playWord(correctWord);  
}
