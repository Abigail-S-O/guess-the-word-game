//Global Variables// 

//ul where player's guessed letters will appear// 
const guessed = document.querySelector (".guessed-letters");
//button showing text 'guess'//
const button = document.querySelector (".guess"); 
//text input to guess letter//
const textBox = document.querySelector (".letter"); 
//paragraph where word in progress appears//
const solving = document.querySelector (".word-in-progress");
const remainingGuessesElement = document.querySelector (".remaining");
//paragraph where remaining guesses display// 
const remainingGuessesSpan = document.querySelector (".remaining span");
//paragraph where messages appear when letter is guessed// 
const messages = document.querySelector (".message"); 
//play again button//
const playAgain = document.querySelector (".play-again"); 

//test word//
let word = "magnolia";
let guessedLetters = []; 
let remainingGuesses = 8;

const getWord = async function () {
    const response = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text ();
    const wordArray = words.split("\n");
   // console.log(wordArray);
   const randomWord = Math.floor(Math.random() * wordArray.length);
   word = wordArray [randomWord].trim();
   placeholder (word);
};

getWord ();

const placeholder = function (word) {
    const placeholderLetters = []; 
    for (const letter of word) {
        //console.log (letter);
       placeholderLetters.push("●"); 
    }
    solving.innerText = placeholderLetters.join("");
};

button.addEventListener ("click", function (e) {
    e.preventDefault();
    messages.innerText = ""; 
    const guess = textBox.value; 
    const yesGuess = validate(guess);

    if (yesGuess) {
        makeGuess (guess);
    }
    //console.log (guess); 
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

const makeGuess = function (guess) {
    guess = guess.toUpperCase ();
    if (guessedLetters.includes(guess)) {
        messages.innerText = "You've already guessed that letter—try again";
    } else {
        guessedLetters.push (guess);
        console.log(guessedLetters);
        updateGuessesRemaining(guess);
        showGuessedLetters(); 
        updateWordIp(guessedLetters);
    }
};

const showGuessedLetters = function () {
    guessed.innerHTML = ""; 
   for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessed.append(li); 
   } 
};

const updateWordIp = function (guessedLetters) {
    const wordUpper = word.toUpperCase (); 
    const wordArray = wordUpper.split(""); 
    const showMeWord = [];
    for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
        showMeWord.push(letter.toUpperCase());
    } else {
        showMeWord.push("●");
    }
}
    solving.innerText = showMeWord.join("");
    winner();
};


const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
      // womp womp - bad guess, lose a chance
      messages.innerText = `Sorry, the word has no ${guess}.`;
      remainingGuesses -= 1;
    } else {
      messages.innerText = `Good guess! The word has the letter ${guess}.`;
    }
  
    if (remainingGuesses === 0) {
      messages.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
      startOver ();
    } else if (remainingGuesses === 1) {
      remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
    } else {
      remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    }
  };

const winner = function () {
    if (word.toUpperCase() === solving.innerText) {
       messages.classList.add("win"); 
       messages.innerHTML = `<p class="highlight">You got it right! Congratulations.</p>`

       startOver ();
    }
};

const startOver = function () {
    button.classList.add ("hide");
    remainingGuessesElement.classList.add ("hide");
    guessed.classList.add ("hide"); 
    playAgain.classList.remove ("hide"); 
}; 

playAgain.addEventListener ("click", function () {
    messages.classList.remove ("win"); 
    guessedLetters = []; 
    remainingGuesses = 8;
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses left`;
    guessed.innerHTML = ""; 
    messages.innerText = ""; 

    getWord (); 

    button.classList.remove ("hide"); 
    playAgain.classList.add ("hide"); 
    remainingGuessesElement.classList.remove ("hide"); 
    guessed.classList.remove ("hide"); 
}); 















