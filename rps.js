let rock = document.getElementById("userRock");
let paper = document.getElementById("userPaper");
let scissors = document.getElementById("userScissors");
let choice = document.querySelector(".choices");
let title = document.getElementById("titleClick");
let result = document.getElementById("result");
let iArray = [rock, paper, scissors]

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber === 0) {
        result.innerHTML = '<i class="far fa-hand-rock"></i>';
    } else if (randomNumber === 1) {
        result.innerHTML = '<i class="far fa-hand-paper"></i>';
    } else if (randomNumber === 2) {
        result.innerHTML = '<i class="far fa-hand-scissors"></i>';
    } 
  };
getComputerChoice();

/*
document.getElementById("result").innerHTML = getComputerChoice();
//choice.innerHTML = `${getComputerChoice()}`
console.log(getComputerChoice());
*/

