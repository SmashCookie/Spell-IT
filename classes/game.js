class GameClass {
    getInputValue(inputElement){
        return inputElement.value;
    }

    checkIfGuessedWordMatchesCorrectWord(userWord, correctWord){
        if(userWord.toLowerCase() === correctWord.toLowerCase()){
            return true;
        } else {
            return false;
        }
    }

    getNewWord(){
        // FUTURE: Pull a list of random words from an API :: https://rapidapi.com/xkubist/api/random-word
        const listOfAvalibleWords = ['Melancholy', 'Bicycle', 'Browser', 'Paper', 'Book', 'Television', 'Toilet'];
        const randomNumberBasedOnAmountOfWords = Math.floor(Math.random()*listOfAvalibleWords.length);
        return listOfAvalibleWords[randomNumberBasedOnAmountOfWords];
    }

    // var msg = new SpeechSynthesisUtterance('Hello World');
    // msg.lang = 'en-US';
    // window.speechSynthesis.speak(msg);

    sayWordOutLoud(wordToSay){
        const msg = new SpeechSynthesisUtterance(wordToSay);
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    }

}

const Game = new GameClass();
export {Game};