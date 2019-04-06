import { User } from './user.js';

class GameClass {
    
    checkIfGuessedWordMatchesCorrectWord(userWord, correctWord) {
        if (userWord.toLowerCase() === correctWord.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    getNewWord() {
        // FUTURE: Pull a list of random words from an API :: https://rapidapi.com/xkubist/api/random-word
        const listOfAvalibleWords = ['Melancholy', 'Bicycle', 'Browser', 'Paper', 'Book', 'Television', 'Toilet'];
        const randomNumberBasedOnAmountOfWords = Math.floor(Math.random() * listOfAvalibleWords.length);
        return listOfAvalibleWords[randomNumberBasedOnAmountOfWords];
    }

    sayWordOutLoud(wordToSay) {
        const msg = new SpeechSynthesisUtterance(wordToSay);
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    }

    hideRegistrationScreen() {
        const screenRegistration = document.querySelector('#screenRegistration');
        screenRegistration.classList.add("hidden");
    }

    showGameScreen() {
        const screenGame = document.querySelector('#screenGame');
        screenGame.classList.remove("hidden");
    }

    displayUserName(userName, element){
        element.textContent = userName;
    }

    displayUserScore(user, elements){
        elements.correctGuesses.textContent = `Correct Guesses: ${user.correctGuesses}`;
        elements.failedGuesses.textContent = `Failed Guesses: ${user.failedGuesses}`;
    }

}

const Game = new GameClass();
export { Game };