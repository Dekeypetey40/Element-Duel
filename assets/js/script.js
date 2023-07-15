/**
 * Wait for the DOM to load
 * Hide the Reset Button until the game starts
 * Event listeners for the buttons
 */

document.addEventListener("DOMContentLoaded", function() {
    //Hide the restart button
    document.getElementById("restart").style.display = "none";
    //start button event listener
    //Hides the start button, shows restart
    let startButton = document.getElementById("begin-duel");
    startButton.addEventListener("click", function() {
        document.getElementById("result").innerText = "Choose your element and your fate will be decided";
        document.getElementById("begin-duel").style.display = "none";
        document.getElementById("restart").style.display = "";

        })
    //Inspired by code from stackoverflow
    let restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", function() {
        location.reload();
    });
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