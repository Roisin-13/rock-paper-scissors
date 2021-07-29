
let rock = document.getElementById("userRock");
let paper = document.getElementById("userPaper");
let scissors = document.getElementById("userScissors");
let iArray = ["r", "p", "s"];
let userChoiceDec = document.querySelector(".myChoice");
let compChoiceDec = document.querySelector(".compChoiceWords");
let compChoiceIcon = document.getElementById("computerChoice");
let result = document.getElementById("result");

//-----user choice
function getUserChoice() {
    rock.addEventListener("click", function() {
        playGame(iArray[0]);
        userChoiceDec.innerHTML = "Rock";
        return iArray[0];
    });
    paper.addEventListener("click", function() {
        playGame(iArray[1]);
        userChoiceDec.innerHTML = "Paper";
        return iArray[1];
    });
    scissors.addEventListener("click", function() {
        playGame(iArray[2]);
        userChoiceDec.innerHTML = "Scissors";
        return iArray[2];
    });
    };
getUserChoice();

//------computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        compChoiceIcon.innerHTML = '<i class="far fa-hand-rock"></i>';
        compChoiceDec.innerHTML = "Rock";
        return iArray[0];
    } else if (randomNumber === 1) {
        compChoiceIcon.innerHTML = '<i class="far fa-hand-paper"></i>';
        compChoiceDec.innerHTML = "Paper";
        return iArray[1];
    } else if (randomNumber === 2) {
        compChoiceIcon.innerHTML = '<i class="far fa-hand-scissors"></i>';
        compChoiceDec.innerHTML = "Scissors";
        return iArray[2];
    } 
  };

  //-------play game
function playGame(userChoice) {

  let computerChoice = getComputerChoice();
    
  function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
        result.innerHTML = "Game is a tie!";
        return;
    };
    if (userChoice === iArray[0]) {
      if (computerChoice === iArray[1]) {
        result.innerHTML = "The computer wins!";
      } else {
        result.innerHTML = "You win!";
      }
    };
      if (userChoice === iArray[2]) {
      if (computerChoice === iArray[0]) {
        result.innerHTML = "The computer wins!";
      } else {
        result.innerHTML = "You win!";
      }
    };
      if (userChoice === iArray[1]) {
      if (computerChoice === iArray[2]) {
        result.innerHTML = "The computer wins!";
      } else {
        result.innerHTML = "You win!";
      }
    };
  };

    determineWinner(userChoice, computerChoice);
  }; 
  playGame();
  