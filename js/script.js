//Global Variables// 

//ul where player's guessed letters will appear// 
const guessed = document.querySelector (".guessed-letters");
//button showing text 'guess'//
const button = document.querySelector (".guess"); 
//text input to guess letter//
const textBox = document.querySelector (".letter"); 
//paragraph where word in progress appears//
const solving = document.querySelector (".word-in-progress");
//paragraph where remaining guesses display// 
const remaining = document.querySelector (".remaining span");
//paragraph where messages appear when letter is guessed// 
const messages = document.querySelector (".message"); 
//play again button//
const playAgain = document.querySelector (".play-again"); 

//test word//
const word = "magnolia";
const guessedLetters = []; 

const progress = function (word) {
    const progressLetters = []; 
    for (const letter of word) {
        console.log (letter);
       progressLetters.push("●"); 
    }
    solving.innerText = progressLetters.join("");
};
progress (word);

button.addEventListener ("click", function (e) {
    e.preventDefault();
    messages.innerText = ""; 
    const submission = textBox.value; 
    const yesGuess = validate(submission);

    if (yesGuess) {
        makeGuess (submission);
    }
    //console.log (submission); 
    textBox.value = ""; 
}); 

const validate = function (input) {
    const acceptedLetter = /[a-zA-z]/; 
    if (input.length === 0) {
        messages.innerText = "Please enter a letter";
    } else if (input.length > 1) {
        messages.innerText = "Only one letter is allowed";
    } else if (!input.match(acceptedLetter)) {
        messages.innerText = "No numbers, please—only letters";
    } else {
        return input;
    }
};

const makeGuess = function (submission) {
    submission = submission.toUpperCase ();
    if (guessedLetters.includes(submission)) {
        messages.innerText = "You've already guessed that letter—try again";
    } else {
        guessedLetters.push (submission);
        console.log(guessedLetters);
    }
};













//const intro = document.querySelector(".intro p");

//title.addEventListener("mouseover", function () {
