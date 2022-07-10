function computerChoice(){
    result = Math.floor(Math.random() * 3 + 1)
    return result;
}


function playRound() {
    let computerSelection = computerChoice();

    let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    let playerSelection;
    switch(playerChoice) {
        case "rock":
            playerSelection =  1;
            break;
        case "paper":
            playerSelection = 2;
            break;
        case "scissors":
            playerSelection = 3;
            break;
        default: 
            playerSelection = "Invalid. Choose rock, paper or scissors."

    }
    


    if (playerSelection == 1  && computerSelection == 3  ) {
        
        
        return "Player wins";
 }  else if (playerSelection == 3 && computerSelection == 1) {
       
        return "Computer wins";
 }  else if (playerSelection > computerSelection) {
       
        return "Player wins";
  } else if (computerSelection > playerSelection) {
        
        return "Computer wins";
 }  else if (playerSelection == computerSelection ) {
        return "Draw";
 }

}

console.log(playRound());

function game() {
    let playerScore = 0; 
    let computerScore = 0;
   
            
    for (let i = 1;  playerScore <= 6 ||  computerScore <= 6; i++) { 
        
        let round = playRound()
        if (round == "Player wins") {
            console.log(`Player Score: ${++playerScore}`)
        }
        else if (round == "Computer wins") {
            console.log(`Computer Score: ${++computerScore}`)
        }
        else {
            console.log("Stalemate") 
        }
        
        if (playerScore === 5) {
            console.log("Player has won the match")
            alert("You did it! You beat the computer! You win nothing!")
                if (confirm("Do you want to play again?") === true) {
                    game()
                } else {
                    break;
                 }
        } else if (computerScore === 5) {
            console.log("Player has lost the match")
            alert("You are, above all else, a failure to yourself and to mankind. How do you lose to a computer?")
            if (confirm("Do you want to play again?") === true) {
                game() 
            } else {
            break;
            }
        } else {
            alert("The score is " + playerScore + " to " + computerScore + " right now. First to 5 wins!" )
        }
    }
  } 
    
game()