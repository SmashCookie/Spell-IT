export class User {
    constructor(name){
        this.name = name;
        this.correctGuesses = 0;
        this.failedGuesses = 0;
    }

    addCorrectGuessPoint(){
        this.correctGuesses++;
    }

    addWrongGuessPoint(){
        this.failedGuesses++;
    }
}