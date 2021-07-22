
let rock = document.getElementById("userRock");
let paper = document.getElementById("userPaper");
let scissors = document.getElementById("userScissors");
let userChoiceDec = document.querySelector(".myChoice");
let compChoiceIcon = document.getElementById("computerChoice");
let compChoiceDec = document.querySelector(".compChoiceWords");
let result = document.getElementById("result");
let iArray = ["r", "p", "s"];

//-------------for user choice
function getUserChoice() {
  rock.addEventListener("click", function() {
      game(iArray[0]);
      userChoiceDec.innerHTML = "Rock";
  });
  paper.addEventListener("click", function() {
      game(iArray[1]);
      userChoiceDec.innerHTML = "Paper";
  });
  scissors.addEventListener("click", function() {
      game(iArray[2]);
      userChoiceDec.innerHTML = "Scissors";
  });
  };
  getUserChoice();


//------for computer choice
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


//--------to play the game
function game(userChoice){
  let computerChoice = getComputerChoice();
  console.log(userChoice + " user choice");
  console.log(computerChoice + " computer choice");
  switch(userChoice + computerChoice) {
    case "rr":
    case "pp":
    case "ss":
      result.innerHTML = "It's a tie!";
      break;
    case "rp":
    case "ps":
    case "sr":
      result.innerHTML = "You lose!";
      break;
    case "rs":
    case "pr":
    case "sp":
      result.innerHTML = "You Win!";
      break;     
  };
};





