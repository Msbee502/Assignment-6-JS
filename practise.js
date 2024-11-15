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
    const randomWord = math.floor(math.random() * words.length);
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

.addEventListener( function(){

})





// const input = document.querySelector("input");

// input.addEventListener("input", function (e) {
//     console.log(this.value);
// })