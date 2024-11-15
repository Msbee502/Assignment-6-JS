// Variables for the DOM elements

// Array that holds a list of word the user should write.


const words = [
    "dependent", "dog", "superficial", "admit", "juice",
    "javascript", "developer", "airplane", "great", "fun",
    "manipulate", "cat", "transition", "school", "computer",
    "programming", "drag", "loving", "north", "access", "phantom", "vacation", "accommodate", "liaison",
  ];
  
  //Constants that reference to HTML elements by their Id. Getelementbyid makes it possible for Javascript to manipulate the content displayed on the page.
  const wordContainer = document.getElementById("word");
  const input = document.getElementById("text");
  const scoreContainer = document.getElementById("score");
  const timeContainer = document.getElementById("time");
  const endGameContainer = document.getElementById("end-game-container");
  
  
  // Game variables
  let score = 0; //Keeps track of the players score
  let time = 10; //sets initial countdown time to 10sek
  let timer; // stores the interval ID for the countdown
  
  // Function that selects a word from the array and displays it in the wordcontainer / wordelement.
  function addWordToDOM() {
    const randomWord = Math.floor(Math.random() * words.length);
    wordContainer.innerText = words[randomWord];
  }
  
  // Function to update the score by 1 for each word that is written correct
  function updateScore() {
    score++;
    scoreContainer.innerText = score;
  }
  
  // Function to update the time. Decrements the timer with 1 sec and updates the display. If the timer reaches 0 it calls gameOver-function.
  function updateTime() {
    time--;
    timeContainer.innerText = `${time}s`;
    if (time === 0) {
        gameOver();
    }
  }
  
  // Function to handle game over that stops the timer and displays game-over message
  function gameOver() {
    clearTimer(timer);
    endGameContainer.innerHTML = `<h1>Game Over</h1><p>Game over! Your final score is ${score}.</p>`;
    // endGameContainer.style.display = "block";
  }
  
  // Event listener for input. detects when the user types in the input field. 
  //If the typed word matches the displayed word, it updates the score, adds a new word, 
  //clears the input field, and adds 5 seconds to the timer.
  input.addEventListener("input", (e) => {
    const typedWord = this.value;
    const currentWord = wordContainer.innerText;
  
    if (typedWord === currentWord) {
        updateScore(); //Calls update score function
        addWordToDOM(); //Calls addWordToDOM function
        this.value = ""; // Reset input
        time += 5; // Increment time by 5 seconds
    }
  });
  
  // Starts the game by resetting the score and time, 
  //hiding the game over message, displaying the first word, and starting the countdown timer.
  function startGame() {
    score = 0;
    time = 10;
    scoreContainer.innerText = score;
    timeContainer.innerText = `${time}s`;
    endGameContainer.style.display = "none";
    addWordToDOM();
  
    // Start the timer
    timer = setInterval(updateTime, 1000);
  }
  
  // Initialize the game on page load
  window.onload = startGame;