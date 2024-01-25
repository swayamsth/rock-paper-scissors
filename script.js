// Generates a random choice for computer

function getComputerChoice(){
    const items = ["rock","paper","scissors"];
    const randIndex = Math.floor(Math.random() * items.length);
    const choice = items[randIndex];
    return choice;

}

// Plays a single round of the game

function playRound(playerSelection, computerSelection){
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
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        return playRound(playerSelection,computerSelection);
    }

    return [result, playerCount, computerCount];
}

// Player Selection

function getPlayerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choices.includes(choice)){
        return choice;
    }else{
        return getPlayerChoice();
    }
}


const choices = document.querySelectorAll("#btn button");

choices.forEach(item => item.addEventListener('click', () => {
    const playerChoice = item.id;
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    list = playRound(playerChoice, computerChoice);
    console.log(list[0]);

}))