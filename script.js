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
        result = "You tied.";
    }

    return [result, playerCount, computerCount];
}

// Player Selection

function main(){
    const choices = document.querySelectorAll("#btn button");
    const output = document.querySelector("#output");
    let playerCount = 0, computerCount = 0;
    let choice = "";
    choices.forEach(item => {
        item.addEventListener('click', (e) => {
            playerSelection = e.target.value;
            const computerSelection = getComputerChoice();
            let result = playRound(playerSelection,computerSelection);

            if (result[1]>result[2]){
                playerCount++;
            } else if (result[2]>result[1]){
                computerCount++;
            }

            console.log(`player: ${playerCount}`);
            console.log(`computer: ${computerCount}`);

            const res = document.createElement("p");
            res.textContent = result[0];
            output.appendChild(res);

        })
    });
}

main();