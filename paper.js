function computerChoice(){
    result = Math.floor(Math.random() * 3 + 1)
    return result;
}

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



