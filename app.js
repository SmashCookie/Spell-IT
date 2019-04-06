import { Game } from './classes/game.js';
import { User } from './classes/user.js';

let currentUser;
let currentCorrectWord;

// HE = Html Elements
const HE = { form: {}, inp: {}, btn: {}, output: {} };

// Form Elements
HE.form.userRegistration = document.querySelector('#formUserRegistration');
HE.form.userWordGuess = document.querySelector('#formUserWordGuess');

// Input Elements
HE.inp.userName = document.querySelector('#inpUserName');
HE.inp.userWordGuess = document.querySelector('#inpUserWordGuess');

// Button Elements
HE.btn.hearWordAgain = document.querySelector('#btnHearWordAgain');
HE.btn.skipWord = document.querySelector('#btnSkipWord');
HE.btn.hint = document.querySelector('#btnHint');

// Text output Elements
HE.output.gameInformation = document.querySelector('#gameInformation');
HE.output.gameInformationUserName = document.querySelector('#gameInformationUserName');
HE.output.gameInfromationCorrectGuesses = document.querySelector('#gameInfromationCorrectGuesses');
HE.output.gameInfromationWrongGuesses = document.querySelector('#gameInfromationWrongGuesses');

HE.form.userRegistration.onsubmit = function registerNewUser(evt) {
    // Prevents the form from sending a POST request
    evt.preventDefault()

    // Gets the name of the user
    const newUserName = HE.inp.userName.value;
    // Creates a new user
    currentUser = new User(newUserName)

    Game.displayUserName(currentUser.name, HE.output.gameInformationUserName);
    Game.displayUserScore(currentUser, {
        correctGuesses: HE.output.gameInfromationCorrectGuesses,
        failedGuesses: HE.output.gameInfromationWrongGuesses
    })
    Game.hideRegistrationScreen();
    Game.showGameScreen();

    currentCorrectWord = Game.getNewWord();
    setTimeout(()=> Game.sayWordOutLoud(currentCorrectWord), 500);   
}

HE.form.userWordGuess.onsubmit = function checkIfUserGuessIsCorrect(evt) {
    // Prevents the form from sending a POST request
    evt.preventDefault();

    const currentUserGuess = HE.inp.userWordGuess.value;

    // userHaveGuessedCorrect will either be true or false
    const userHaveGuessedCorrect = Game.checkIfGuessedWordMatchesCorrectWord(currentUserGuess, 
        currentCorrectWord);
    
    if(userHaveGuessedCorrect){
        alert('Yay');
        currentUser.addCorrectGuessPoint();
        HE.inp.userWordGuess.value = '';
    } else {
        alert('Nay')
        currentUser.addWrongGuessPoint();
    }

    Game.displayUserScore(currentUser, {
        correctGuesses: HE.output.gameInfromationCorrectGuesses,
        failedGuesses: HE.output.gameInfromationWrongGuesses
    });

    currentCorrectWord = Game.getNewWord();
    setTimeout(()=> Game.sayWordOutLoud(currentCorrectWord), 500); 
}

HE.btn.hearWordAgain.onclick = function hearWordAgain() {
    Game.sayWordOutLoud(currentCorrectWord);
}

HE.btn.skipWord.onclick = function skipCurrentWordAndGetANewOne() {
    currentCorrectWord = Game.getNewWord();
    setTimeout(()=> Game.sayWordOutLoud(currentCorrectWord), 100);
}