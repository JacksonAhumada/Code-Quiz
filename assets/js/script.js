var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;

// var timeRe = document.querySelector(".time");

// var timeLeft = 60;

// function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//       timeLeft--;
//       timeRe.textContent = "Time: " + timeLeft;
  
//       if(timeLeft === 0) {
       
//         clearInterval(timerInterval);
        
//         sendMessage();
//       }
  
//     }, 1000);
//   }

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