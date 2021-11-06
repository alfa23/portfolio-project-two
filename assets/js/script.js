// Wait for the DOM to finish loading before running

// Start-panel script

// Get start button element and add event listener

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'start') {
        document.getElementById('start-panel').style.display = 'none';
        document.getElementById('game-panel').style.display = 'block'
      }
    })
  }
})

// Game panel script

// Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'submit-answer') {
        checkAnswer();
      }
      if (this.getAttribute('data-type') === 'pass') {
        checkAnswer();
      }
    })
    // Event listener for user pressing Enter instead of clicking submit button
    document.getElementById('answer-box').addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        checkAnswer();
      }
    })
  }
})


function checkAnswer() {

  let userAnswer = document.getElementById('answer-box').value;
  let correctAnswer = 'correct';
  let isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    alert('Nerdtastic! You got it right! :D');
    incrementScore();
  } else {
    alert(`Awww... The correct answer was ${correctAnswer}!`);
  }

  runTest();

}

function incrementScore() {

  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;

}

// score-panel script

// Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'start') {
        document.getElementById('score-panel').style.display = 'none';
        document.getElementById('game-panel').style.display = 'block'
      }
      if (this.getAttribute('data-type') === 'fback') {
        document.getElementById('score-panel').style.display = 'none';
        document.getElementById('fback-panel').style.display = 'block'
      }
    })
  }
})

// fback-panel script

// Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'start') {
        document.getElementById('fback-panel').style.display = 'none';
        document.getElementById('game-panel').style.display = 'block'
      }
    })
  }
})



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
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}