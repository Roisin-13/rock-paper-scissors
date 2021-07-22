let rock = document.getElementById("userRock");
let paper = document.getElementById("userPaper");
let scissors = document.getElementById("userScissors");
//let compChoiceDec = document.querySelector(".choices");
//let title = document.getElementById("titleClick");
let compChoiceIcon = document.getElementById("computerChoice");
let userChoiceDec = document.querySelector(".myChoice")
let iArray = ["r", "p", "s"]
let result = document.getElementById("result");


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
 if (randomNumber === 0) {
      compChoiceIcon.innerHTML = '<i class="far fa-hand-rock"></i>';
      return iArray[0];
  } else if (randomNumber === 1) {
      compChoiceIcon.innerHTML = '<i class="far fa-hand-paper"></i>';
      return iArray[1];
  } else if (randomNumber === 2) {
      compChoiceIcon.innerHTML = '<i class="far fa-hand-scissors"></i>';
      return iArray[2];
  } 
};



function getUserChoice() {
  rock.addEventListener("click", function() {
      game(iArray[0]);
  });
  paper.addEventListener("click", function() {
      game(iArray[1]);
  });
  scissors.addEventListener("click", function() {
      game(iArray[2]);
  });
  };
  getUserChoice();


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





