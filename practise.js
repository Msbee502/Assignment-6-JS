const words = [
    "dependent", "dog", "superficial", "admit", "juice",
    "javascript", "developer", "airplane", "great", "fun",
    "manipulate", "cat", "transition", "school", "computer",
    "programming", "drag", "loving", "north", "access", "phantom", "vacation", "accommodate", "liaison",
  ];

  const timeContainer = document.getElementById("word");
  const scoreContainer = document.getElementById("score");
  const input = document.getElementById("text");
  const endGameContainer = document.getElementById("end-game-container");
  const wordContainer = document.getElementById("word");

  //Variables
  let time = 10; 
  let score = 0; 
  let timer;

  //Function that selects a random word from the array
  function addWordToDOM(){
    //Random index
    const randomWord = Math.floor(Math.random() * words.length);
    //Select a word from the array using randomWord
    const selectedWord = words[randomWord];
    //Display selected word
    wordContainer.innerText = selectedWord;

}

function updateScore(){
    //Updates the score with 1
     score ++;     
    //Displays the score in  scorecontainer
    scoreContainer.innerText = score;

}

// Add an event listener to the text element. When you type in the correct word, the function should: 
//     • update score 
//     • give the user a new word 
//     • increment time by 5 seconds 
//     • reset the input to empty string

text.addEventListener("input", function(e) {
    

    if (input === addWordToDOM){
    updateScore();
    addWordToDOM(); 
    input = "";
    time= +5;
    }
})

// PART 2
// Counting down - timer
// Create a updateTime function, every time it runs it should decrement 1 from the timer
// Create  a gameOver function that will open once the timer hits zero

function Timer(){
time=--; //räknar ner med en sekund

timeContainer.innerText = `${time}s`;
if (time === 0){
    gameOver();
}

}

function startGame (){

}


// const input = document.querySelector("input");

// input.addEventListener("input", function (e) {
//     console.log(this.value);
// })