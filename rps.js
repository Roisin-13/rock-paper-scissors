let rock = document.getElementById("userRock");
let paper = document.getElementById("userPaper");
let scissors = document.getElementById("userScissors");
let choice = document.querySelector(".choices");
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

let text = getComputerChoice();
choice.innerHTML = `${text}`;
console.log(getComputerChoice());


