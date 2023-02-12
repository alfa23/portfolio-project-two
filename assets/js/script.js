/**
 * GAME CODE
 */

// Declare array of key:values containing information for nerdOmeter tests
let icons = [{
  iconName: 'assets/images/nom_01.jpg',
  answer: 'Assassins Creed'
},
{
  iconName: 'assets/images/nom_02.jpg',
  answer: 'Avengers'
},
{
  iconName: 'assets/images/nom_03.jpg',
  answer: 'Batman'
},
{
  iconName: 'assets/images/nom_04.jpg',
  answer: 'Game of Thrones'
},
{
  iconName: 'assets/images/nom_05.jpg',
  answer: 'Ghostbusters'
},
{
  iconName: 'assets/images/nom_06.jpg',
  answer: 'Green Lantern'
},
{
  iconName: 'assets/images/nom_07.jpg',
  answer: 'Hunger Games'
},
{
  iconName: 'assets/images/nom_08.jpg',
  answer: 'Jurassic Park'
},
{
  iconName: 'assets/images/nom_09.jpg',
  answer: 'Legend of Zelda'
},
{
  iconName: 'assets/images/nom_10.jpg',
  answer: 'Lord of the Rings'
},
{
  iconName: 'assets/images/nom_11.jpg',
  answer: 'Star Trek'
},
{
  iconName: 'assets/images/nom_12.jpg',
  answer: 'Star Wars'
},
{
  iconName: 'assets/images/nom_13.jpg',
  answer: 'Thundercats'
},
{
  iconName: 'assets/images/nom_14.jpg',
  answer: 'Transformers'
},
{
  iconName: 'assets/images/nom_15.jpg',
  answer: 'Wonder Woman'
}
];


// Wait for the DOM to finish loading before running

// Start-panel script
// Get start button element and add event listener
document.addEventListener("DOMContentLoaded", function () {
let buttons = document.getElementsByTagName('button');

for (let button of buttons) {
  button.addEventListener('click', function () {
    if (this.getAttribute('data-type') === 'start') {
      document.getElementById('start-panel').style.display = 'none';
      document.getElementById('game-panel').style.display = 'block';
      // Changes header subhead element copy to test question
      document.getElementById('subheader').innerHTML = 'What is this logo from?';
    }
  });
}
});

// Game panel script
// Get button elements and add event listeners
document.addEventListener("DOMContentLoaded", function () {
let buttons = document.getElementsByTagName('button');

for (let button of buttons) {
  button.addEventListener('click', function () {
    if (this.getAttribute('data-type') === 'submit-answer') {
      checkAnswer('submit-answer');
    }
    if (this.getAttribute('data-type') === 'pass') {
      checkAnswer('pass');
    }
  });
}
// Event listener for user pressing Enter instead of clicking submit button
document.getElementById('answer-box').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkAnswer('submit-answer');
  }
});
});

// Iterate over main questions to generate a set of 5 unique
let testIcons = [];

function getNewSet() {
testIcons = [];
let alreadySelected = [];
while (testIcons.length < 5) {
  let t = Math.floor(Math.random() * 15);
  if (alreadySelected.includes(t)) {
    continue;
  }
  alreadySelected.push(t);
  testIcons.push(icons[t]);
}
}

// Method to check answer
function checkAnswer(clickType) {
let userAnswer = document.getElementById('answer-box').value;
let correctAnswer = testIcons[questionNumber].answer;
if (clickType === "submit-answer" && !userAnswer) {
  swal("Error!", "You may NOT submit an empty answer!", "warning");
  return;
}
let isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

if (isCorrect) {
  swal("Nerd-tastic!", `${correctAnswer} was the right answer!`, "success");
  incrementScore();
} else {
  swal("Nerd-mare!", `The correct answer was ${correctAnswer}!`, "info");
}
questionNumber++;
let gameIsFinished = checkGameFinished();
if (!gameIsFinished) {
  document.getElementById('mssg-banner').innerHTML = `Question ${(questionNumber + 1)} out of 5`;
  setQuestion();
  document.getElementById('answer-box').value = '';
} else {
  document.getElementById('mssg-banner').innerHTML = `Question 1 out of 5`;
  setQuestion();
  document.getElementById('answer-box').value = '';
}
}

// Method to increment score
let score = 0;

function incrementScore() {
score++;
}

// Method to check if last (5th) question has been answered
function checkGameFinished() {
if (questionNumber == 5) {
  // Checks final score & contextually update response-html h2 element
  if (score <= 1) {
    document.getElementById('response-html').innerHTML = 'UNLUCKY!';
  }
  if (score == 2) {
    document.getElementById('response-html').innerHTML = 'NOT BAD!';
  }
  if (score == 3) {
    document.getElementById('response-html').innerHTML = 'GOOD GOING!';
  }
  if (score == 4) {
    document.getElementById('response-html').innerHTML = 'WELL DONE!';
  }
  if (score == 5) {
    document.getElementById('response-html').innerHTML = 'TOP MARKS!';
  }
  
  document.getElementById('score-html').innerHTML = `You got a score of<br>${score}`;
  document.getElementById('game-panel').style.display = 'none';
  document.getElementById('score-panel').style.display = 'block';
  // Returns header subhead element copy to original copy
  document.getElementById('subheader').innerHTML = 'The ULTIMATE nerd test!';
  startFreshGame();
  return false;
} else {
  return false;
}
}

// Method to start a fresh game if checkGameFinished = true
function startFreshGame() {
questionNumber = 0;
score = 0;
main();
}

// score-panel script
// Get button elements and add event listeners
document.addEventListener("DOMContentLoaded", function () {
let buttons = document.getElementsByTagName('button');

for (let button of buttons) {
  button.addEventListener('click', function () {
    if (this.getAttribute('data-type') === 'start') {
      document.getElementById('score-panel').style.display = 'none';
      document.getElementById('game-panel').style.display = 'block';
    }
    if (this.getAttribute('data-type') === 'fback') {
      document.getElementById('score-panel').style.display = 'none';
      document.getElementById('fback-panel').style.display = 'block';
    }
  });
}
});

// fback-panel script
// Get button elements and add event listeners
document.addEventListener("DOMContentLoaded", function () {
let buttons = document.getElementsByTagName('button');

for (let button of buttons) {
  button.addEventListener('click', function () {
    if (this.getAttribute('data-type') === 'start') {
      document.getElementById('fback-panel').style.display = 'none';
      document.getElementById('game-panel').style.display = 'block';
    }
  });
}
});

// Main entry point function
let questionNumber = 0; // This will always be between 0 and 4 (Q1 - Q5)
function main() {
document.getElementById('answer-box').value = '';
getNewSet();
setQuestion();
}

document.addEventListener("DOMContentLoaded", main());

function setQuestion() {
document.getElementById('game-image').src = testIcons[questionNumber].iconName;
}

/**
* USER INTERACTION CODE
*/

// modal box for footer/image credits learnt, borrowed and adapted css-grid code from: https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("credits");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
if (event.target == modal) {
  modal.style.display = "none";
}
};