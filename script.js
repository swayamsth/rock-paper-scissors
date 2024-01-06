// Generates a random choice for computer

function getComputerChoice(){
    const items = ["rock","paper","scissors"];
    const randIndex = Math.floor(Math.random() * items.length);
    const choice = items[randIndex];
    return choice;

}

// Plays a single round of the game

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    let result, playerCount = 0, computerCount = 0;
    if (playerSelection !== computerSelection){
        switch (playerSelection + " " + computerSelection){
            case "rock scissors":
                result = `You Win! ${playerSelection} wins against ${computerSelection}`;
                playerCount++;
                break;
            case "rock paper":
                result = `You Lose! ${playerSelection} loses against ${computerSelection}`;
                computerCount++;
                break;
            case "paper rock":
                result = `You Win! ${playerSelection} wins against ${computerSelection}`;
                playerCount++;
                break;
            case "paper scissors":
                result = `You Lose! ${playerSelection} loses against ${computerSelection}`;
                computerCount++;
                break;
            case "scissors rock":
                result = `You Lose! ${playerSelection} loses against ${computerSelection}`;
                computerCount++;
                break;
            case "scissors paper":
                result = `You Win! ${playerSelection} wins against ${computerSelection}`;
                playerCount++;
                break;
        }
    } else {
        console.log("You tied.");
        playerSelection = prompt("Rock, Paper or Scissors?");
        computerSelection = getComputerChoice();
        return playRound(playerSelection,computerSelection);
    }

    return [result, playerCount, computerCount];
}

function game(){
    let playerCount = 0, computerCount = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        list = playRound(playerSelection,computerSelection);
        
        if (list[1]>list[2]){
            playerCount++;
        }else{
            computerCount++;
        }
        console.log(list[0]);
    }
    
    if (playerCount > computerCount){
        console.log(`Player 1 won the game with ${playerCount} points!`)
    }else {
        console.log(`Computer won the game with ${computerCount} points!`)
    }
}

game();