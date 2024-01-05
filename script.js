// Generates a random choice for computer

function getComputerChoice(){
    const items = ["rock","paper","scissors"];
    const randIndex = Math.floor(Math.random() * items.length);
    const choice = items[randIndex];
    return choice;

}