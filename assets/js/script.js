var timer = document.querySelector("#start");
var quizQuestions = document.querySelector("#quiz");
var remainingTime = document.querySelector("#time");
var ulCreate = document.createElement("ul");

var score = 0;
var questionIndex = 0;
var seconds = 76;
var holdInterval = 0;
var wrong = 10;

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log",
  },
];

timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      seconds--;
      remainingTime.textContent = "Time: " + seconds;

      if (seconds <= 0) {
        clearInterval(holdInterval);
        allDone();
        remainingTime.textContent = " ";
      }
    }, 1000);
  }
  render(questionIndex);
});

function render(questionIndex) {
  quiz.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestions = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    quiz.textContent = userQuestions;
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    quiz.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    if (element.textContent == questions[questionIndex].answer) {
      score++;
      createDiv.textContent = "That is correct!";
    } else {
      seconds = seconds - wrong;
      createDiv.textContent =
        "Incorrect! the answer is: " + questions[questionIndex].answer;
    }
  }
  questionIndex++;

  if (questionIndex >= questions.length) {
    finished();
    createDiv.textContent =
      "You have finished the quiz! You got " +
      score +
      " out of " +
      questions.length +
      " correct!";
  } else {
    render(questionIndex);
  }
  quiz.appendChild(createDiv);
}

function finished() {
  quiz.innerHTML = "";
  timer.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "Finished!";

  quiz.appendChild(createH1);

  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");
  quiz.appendChild(createP);

  if (seconds >= 0) {
    var timeRemaining = seconds;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;
    quiz.appendChild(createP2);
  }
  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter you initials: ";
  quiz.appendChild(createLabel);

  var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent = "";
quiz.appendChild(createInput);

var createSubmit = document.createElement("button");
createSubmit.setAttribute("type", "submit");
createSubmit.setAttribute("id", "submit");
createSubmit.textContent = "Submit";
quiz.appendChild(createSubmit);

createSubmit.addEventListener("click", function () {
  var initials = createInput.value;
  if (initials === null) {
    console.log("No value entered!");
  }else {
    var finalScore = {
      initials: initials,
      score: timeRemaining
    }
    console.log(finalScore);
    var allScores = localStorage.getItem("allScores");
    if (allScores === null) {
      allScores = [];

    }else {
      allScores = JSON.parse(allScores);
    }
    allScores.push(finalScore);
    var newScore = JSON.stringify("allScores", newScore);
    window.location.replace("/HighScore.html");
  }
});
}

