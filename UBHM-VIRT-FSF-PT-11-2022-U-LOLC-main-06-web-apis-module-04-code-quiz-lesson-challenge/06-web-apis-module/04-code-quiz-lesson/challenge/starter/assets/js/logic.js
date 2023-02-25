// Declaring variables to target DOM elements
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timeElement;
var timeDisplayElement = document.getElementById("time");
var initialElement = document.getElementById("initials");
var feedBack = document.getElementById("feedback");
var questionHead = document.getElementById("questions");
var userChoice = document.getElementById("choices");
// sound effect
var sfxCorrect = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// function to regulate timer
function startTimer() {
   time--;
   timeDisplayElement.textContent = time;
 if (time <= 0) {
    quizEnd();
 }
}
// function to hide and unhide screen and display time at the start
function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    questionHead.removeAttribute("class");
  
    timeElement = setInterval(startTimer, 1000);
  
    timeDisplayElement.textContent = time;
  
    getQuestion();
}

 // get current question object from array and update it.
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var titleElement = document.getElementById("question-title");
  titleElement.textContent = currentQuestion.title;

  userChoice.innerHTML = "";

  currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    choiceNode.onclick = questionClick;

    userChoice.appendChild(choiceNode);
  });
}

// function to evaluate of user's answer choices & feedback
function questionClick() {
  
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;
    if (time < 0) {
      time = 0;
    }

    timeDisplayElement.textContent = time;
    sfxWrong.play();
    feedBack.textContent = "Wrong!";
  } else {
    sfxCorrect.play();
    feedBack.textContent = "Correct!";
  }

  feedBack.setAttribute("class", "feedback");
  setTimeout(function() {
    feedBack.setAttribute("class", "feedback hide");
  }, 1000);

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timeElement);

  // show end screen
  var endScreenElement = document.getElementById("end-screen");
  endScreenElement.removeAttribute("class");

  // show final score
  var finalScoreElement = document.getElementById("final-score");
  finalScoreElement.textContent = time;
  questionHead.setAttribute("class", "hide");
}

function saveHighscore() {
  // get value of input box
  var initials = initialElement.value.trim();

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: time,
      initials: initials
    };

    // turn objects into an array of strings + put it into local storage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// Initialising
initialElement.onkeyup = checkForEnter;
startBtn.onclick = startQuiz;
submitBtn.onclick = saveHighscore;


function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
  
    // update title with current question
    var titleElement = document.getElementById("question-title");
    titleElement.textContent = currentQuestion.title;
  
    // clear out any old question choices
    userChoice.innerHTML = "";
  
    // loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
      // create new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      choiceNode.onclick = questionClick;
  
      // display on the page
      userChoice.appendChild(choiceNode);
    });
  }


