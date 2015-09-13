  ////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
function getInput() {
    alert("Let's play rock paper scissors");
    var userInput = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    return userInput;
}  

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
} 

function getPlayerMove(move) {

    if (!move){
        move = getInput();
    }

 console.log("Player chose: " + move);
    return move;

}

function getComputerMove(move) {

    if (!move){
        move = randomPlay();
    }
    console.log("Computer chose: " + move);
    return move;

}
function getWinner(playerMove,computerMove) {
  if (playerMove === computerMove) {
   
    return ("It's a tie!");
    }
    else if (playerMove === "rock"){

         if (computerMove === "paper"){
            return "computer wins!";
         } else {
            return "player wins!";
         }
    }
     else if(playerMove === "paper"){

        if(computerMove === "rock"){
          return "player wins!";
        } else {
            return "computer wins!";
        }
    }
    else if (playerMove === "scissors"){

        if(computerMove === "paper"){
            return "player wins!";
        } else {
            return "computer wins!";
        }
    } 
}
    

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    

    while(playerWins < 5 && computerWins < 5){
         winner = getWinner(getPlayerMove(), getComputerMove());
        if ("player wins!" === winner) {
            playerWins++
            console.log("player wins! " + playerWins)
        } else if ("computer wins!" === winner) {
            computerWins++
            console.log("computer wins! " + computerWins)
            
             
        } else {
            console.log("It's a tie");
        }
        console.log("players score is " + playerWins + " and computers score is " + computerWins);
        console.log("The score is " + playerWins +  " to " + computerWins);

    }
  

  
  if ("player wins!" === winner) {
    console.log("You win!")
    } else {
    console.log("You lose!")
    }

  return; 
}





console.log(playToFive());


