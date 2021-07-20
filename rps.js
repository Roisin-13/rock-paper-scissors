let rock = document.getElementById("userRock");
let paper = document.getElementById("userPaper");
let scissors = document.getElementById("userScissors");
let choice = document.getElementById("choices");
let title = document.getElementById("titleClick");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "scissors";
    } else if (randomNumber === 2) {
      return "paper";
    } 
  };

  function getNum () {
    let randomNumber = Math.floor(Math.random() * 24);
    return randomNumber;  
  }
console.log(getComputerChoice());
console.log("your mum");
console.log(getNum());

//let playGame () => {};





















/*function playGame() {
    rock.addEventListener("click", function() {
        userInput = 1;
    });
    paper.addEventListener("click", function() {
        userInput = 2;
    });
    scissors.addEventListener("click", function() {
        userInput = 3;
    });
    const getUserChoice = userInput => {
        if (userInput === 1) {
          choice.innerHTML = "rock";
        } else if (userInput === 2) {
            choice.innerHTML = paper;
        } else if (userInput === 3) {
            choice.innerHTML = scissors;
        } 
      };
      let rockClick = function() {
        rock.style.color = "red";
        rock.style.fontSize = "200px";
    };
    //rock.addEventListener("click", rockClick);
    //rock.addEventListener("click", playGame);
  }; 
  
  document.playGame();
/* 
  var userChoice = getUserChoice("");
  var computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));




let rockClick = function() {
    rock.style.color = "red";
    rock.style.fontSize = "200px";
};
rock.addEventListener("click", rockClick);

let paperClick = function() {
    paper.style.color = "red";
    paper.style.fontSize = "200px";
};
paper.addEventListener("click", paperClick);

let scissorsClick = function() {
    scissors.style.color = "red";
    scissors.style.fontSize = "200px";
};
scissors.addEventListener("click", scissorsClick);


/*
const getUserChoice = userInput => {
    let choice = document.getElementById("choices");
    if (userInput === rock) {
      choice.innerHTML = rock;
    } else if (userInput === paper) {
      return userInput;
    } else if (userInput === scissors) {
        return userInput;
    } else if (userInput === "bomb") {
        return userInput;
    } 
  };

  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "scissors";
    } else if (randomNumber === 2) {
      return "paper";
    } 
  };

  function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
      return "Game is a tie!";
    };
     if (userChoice === "bomb") {
      return "OMG bomb beats EVERYTHING - you win!";
    };
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "The computer wins!";
      } else {
        return "You win!";
      }
    };
      if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "The computer wins!";
      } else {
        return "You win!";
      }
    };
      if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "The computer wins!";
      } else {
        return "You win!";
      }
    };
  };

  function playGame() {
    var userChoice = getUserChoice("");
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }; 
  playGame();
*/ 