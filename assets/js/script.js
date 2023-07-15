// Wait for the DOM to load
// Event listeners to the start button
document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementById("begin-duel");

    startButton.addEventListener("click", function() {
        document.getElementById("result").innerText = "Choose your element and your fate will be decided";

        })

});

/* 

function runDuel() {

}
function playerChoice() {
    
}
function cpuChoice() {
    
}
/**Creates two random numbers between 1-20 */
function randomDiceRoll() {
    let playerNumber = Math.floor(Math.random() * 20) + 1;
    let cpuNumber = Math.floor(Math.random() * 20) + 1;
    
}
function compareElements() {
    const elements = {
        fire: "nature",
        water: "fire",
        nature: "water"
    }

    
}
function chooseWinner() {
    
}
function displayResult() {
    
}
function scoreTally() {
    
}
function restartGame() {
    
}