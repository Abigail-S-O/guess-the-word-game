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
    const input = textBox.value; 
    console.log (input); 
    textBox.value = ""; 
}); 














//const intro = document.querySelector(".intro p");

//title.addEventListener("mouseover", function () {
