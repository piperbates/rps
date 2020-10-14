//DOM
let stage = document.querySelector("#stage");
let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let timesPlayedBox = document.querySelector("#timesPlayed");
let winnerBox = document.querySelector("#winnerBox");
let scoreBox = document.querySelector("#score");
let resultBox = document.querySelector("#resultBox");

resultBox.innerText = "";
timesPlayedBox.innerText = "";
scoreBox.innerText = "";
winnerBox.innerText = "";

//Vars
let win = `You won!`;
let lose = `You lost.`;
let tie = `It's a tie!`;

let score = 0;
let result = win;

let timesPlayed = 0;
let playerMove = "";
let computerMove = "";

//funcions

function getCompMove() {
  timesPlayed = timesPlayed + 1;
  randomNumberGen();
  getWinner();
}

function getWinner() {
  resultBox.innerText = `You played ${playerMove}. The computer played ${computerMove}.`;

  if (playerMove === "rock" && computerMove === "paper") {
    result = lose;
  } else if (playerMove === "rock" && computerMove === "rock") {
    result = tie;
  } else if (playerMove === "rock" && computerMove === "scissors") {
    result = win;
  }

  //player choses paper
  else if (playerMove === "paper" && computerMove === "scissors") {
    result = lose;
  } else if (playerMove === "paper" && computerMove === "paper") {
    result = tie;
  } else if (playerMove === "paper" && computerMove === "rock") {
    result = win;
  }

  // player choses scissors
  else if (playerMove === "scissors" && computerMove === "rock") {
    result = lose;
  } else if (playerMove === "scissors" && computerMove === "scissors") {
    result = tie;
  } else if (playerMove === "scissors" && computerMove === "paper") {
    result = win;
  }
  winnerBox.innerText = result;
}

//computers move
function randomNumberGen() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerMove = "rock";
  } else if (randomNumber === 1) {
    computerMove = "paper";
  } else if (randomNumber === 2) {
    computerMove = "scissors";
  }
  return computerMove;
}

//Runs the Game

function playGame() {
  let playerInput = input.value;
  playerMove = playerInput.toLowerCase();
  if (playerInput === "" || playerInput === " ") {
    alert("Please insert a value");
  } else if (
    playerMove === "rock" ||
    playerMove === "paper" ||
    playerMove === "scissors"
  ) {
    getCompMove();
    if (result === win) {
      score = score + 1;
    } else if (result === lose) {
      score = score - 1;
    } else if (result === tie) {
      score = score;
    }

    input.value = "";
    timesPlayedBox.innerText = `Times Played: ${timesPlayed}.`;
    scoreBox.innerText = `Score: ${score}`;
  } else {
    alert("Please insert rock, paper, or scissors");
  }
}

// } else {
//   alert("NOPE")
// }};

//Listeners

submit.addEventListener("click", playGame);

document.body.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    playGame();
  }
});
