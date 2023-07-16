
let cpuElement;
let playerElement;
const elements = {
    fire: "nature",
    water: "fire",
    nature: "water"
}
/**
 * Wait for the DOM to load
 * Hide the Reset Button until the game starts
 * Event listeners for the buttons
 * Waits for element choice to use run
 */
document.addEventListener("DOMContentLoaded", function() {
    //Hide the restart and roll dice buttons
    document.getElementById("restart").style.display = "none";
    document.getElementById("roll-dice").style.display = "none";
    //start button event listener
    //Hides the start button, shows restart
    
    let startButton = document.getElementById("begin-duel");
    startButton.addEventListener("click", function() {
        document.getElementById("result").innerText = "Choose your element and your fate will be decided";
        document.getElementById("begin-duel").style.display = "none";
        document.getElementById("restart").style.display = "";

        let elementButtons = document.getElementsByClassName("element");
        for (let element of elementButtons){
        element.addEventListener("click", function() {
        playerElement = this.getAttribute("data-type"); 
        document.getElementById("player-choice").innerText = `Your choice: ${playerElement}`
        cpuChoice();
        document.getElementById("roll-dice").style.display = "";
        

        }
        )}


        })
    //Listens for element button to be clicked 
    //and assigns that element to player
    //Calls the cpuChoice() function

    

    //Event Listener for roll dice button
    let rollDice = document.getElementById("roll-dice");
    rollDice.addEventListener("click", function() {
        randomDiceRoll()
    })
    //Inspired by code from stackoverflow
    let restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", function() {
        location.reload();
    });

    //Listen for player clicking element button

});



function runDuel() {

}

function cpuChoice() {
    compChoice = Math.floor(Math.random() *3)
    switch (compChoice) {
        case 0:
            cpuElement = "fire";
            document.getElementById("cpu-choice").innerText = `Opponent choice: ${cpuElement}`;
            break;
        case 1:
            cpuElement = "water";
            document.getElementById("cpu-choice").innerText = `Opponent choice: ${cpuElement}`;
            break;
        case 2:
            cpuElement = "nature";
            document.getElementById("cpu-choice").innerText = `Opponent choice: ${cpuElement}`;
            break;

    }
    
}
/**
 * A random number between 1-20 is picked for both player
 * and computer and is stored in variable
 * before any bonuses are added.
 */
function randomDiceRoll() {
    let playerNumber = Math.floor(Math.random() * 20) + 1;
    let cpuNumber = Math.floor(Math.random() * 20) + 1;
    compareElements();
    
    
}
function compareElements() {
    

    
}
function chooseWinner() {
    
}
function displayResult() {
    
}
function scoreTally() {
    
}
