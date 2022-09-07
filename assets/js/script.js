var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;


function startGame() {
  
  timerCount = 60;
  //need button and greeting to disappear, and first question display.
  //need function questions() to run 
  startTimer()
}

  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  //sets the questions.
function render(questionSet) {
  quiz.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionSet].title;
    var userChoices = questions[questionSet].options;
    quiz.textContent = userQuestion;
  }
  userChoices.forEach(function (newItem)  {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    quiz.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (compare))
  });
}


  

  startButton.addEventListener("click", startGame);