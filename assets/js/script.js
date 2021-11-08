// Declare array of key:values containing information for nerdOmeter tests

let icons = [{
    iconName: 'assets/images/nOm_01.jpg',
    answer: 'Assassins Creed'
  },
  {
    iconName: 'assets/images/nOm_02.jpg',
    answer: 'The Avengers'
  },
  {
    iconName: 'assets/images/nOm_03.jpg',
    answer: 'Batman'
  },
  {
    iconName: 'assets/images/nOm_04.jpg',
    answer: 'Game of Thrones'
  },
  {
    iconName: 'assets/images/nOm_05.jpg',
    answer: 'Ghostbusters'
  },
  {
    iconName: 'assets/images/nOm_06.jpg',
    answer: 'Green Lantern'
  },
  {
    iconName: 'assets/images/nOm_07.jpg',
    answer: 'Hunger Games'
  },
  {
    iconName: 'assets/images/nOm_08.jpg',
    answer: 'Jurassic Park'
  },
  {
    iconName: 'assets/images/nOm_09.jpg',
    answer: 'The Legend of Zelda'
  },
  {
    iconName: 'assets/images/nOm_10.jpg',
    answer: 'The Lord of the Rings'
  },
]

console.log(icons)

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
    runTest();
  }
})
function runTest() {
  // Generate array of 5 (# of icons in test) unique random numbers between 1-10 (upper limit should equal max test icons (total # of objects in icons array))
  // Code 
  let testIcons = [];
  while (testIcons.length < 5) {
    let t = Math.floor(Math.random() * 10);
    if (testIcons.indexOf(t) === -1) testIcons.push(t);
console.log(testIcons);
    // Assign icon variable, iterate testIcons array & update image html
    // let icon = 0
    for (i = 0; i<5; i ++) {
      document.getElementById('game-image').src = icons[t].iconName;
      correctAnswer = icons[t].answer;
    }
  }
}

function checkAnswer() {

  let userAnswer = document.getElementById('answer-box').value;
  let isCorrect = userAnswer.toLowerCase === correctAnswer.toLowerCase;

  console.log(userAnswer);
  console.log(correctAnswer);
  console.log(isCorrect);

  if (isCorrect) {
    alert('Nerdtastic! You got it right! :D');
    incrementScore();
  } else {
    alert(`Awww... The correct answer was ${correctAnswer}!`);
  }
}
initialScore = 0;
function incrementScore() {
  newScore = ++initialScore;
  initialScore === newScore;
  console.log(initialScore, newScore);
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