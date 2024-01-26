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

// Main Game

function main(){
    const choices = document.querySelectorAll("#btn button");
    const div = document.querySelector("#btn");
    const output = document.querySelector("#output");
    const playercomputer = document.querySelector("#playercomputer");
    let playerCount = 0, computerCount = 0;
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

            output.textContent = result[0];
            playercomputer.textContent = `Player: ${playerCount} Computer: ${computerCount}`;

            if (playerCount === 5 || computerCount === 5){    
                div.remove();
                if (playerCount > computerCount){
                    output.textContent = `You Win ${playerCount} - ${computerCount}`;
                } else {
                    output.textContent = `You Lose ${computerCount} - ${playerCount}`;
                }

                const restartBtn = document.createElement("button");
                const restartDiv = document.querySelector("#restart");
                restartBtn.textContent = "Restart";
                restartDiv.appendChild(restartBtn);


            }
        })
    });
}

main();