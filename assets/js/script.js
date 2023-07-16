
const elements = {
    fire: "nature",
    water: "fire",
    nature: "water"
}

Object.keys(elements)
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
        document.getElementById("result").innerText = "Roll the dice and the winner will be determined";
        let playerElement = this.getAttribute("data-type"); 
        document.getElementById("player-choice").innerText = `${playerElement}`
        cpuChoice();
        document.getElementById("roll-dice").style.display = "";
        return playerElement;
        

        }
        )}


        })
    //Listens for element button to be clicked 
    //and assigns that element to player
    //Calls the cpuChoice() function

    

    //Event Listener for roll dice button
    let rollDice = document.getElementById("roll-dice");
    rollDice.addEventListener("click", function() {

        randomDiceRollPlayer();
        randomDiceRollCpu();
        compareElements();
        chooseWinner();

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
            cpuElement = Object.keys(elements)[0];
            document.getElementById("cpu-choice").innerText = `Opponent choice: ${cpuElement}`;
            return cpuElement;
        case 1:
            cpuElement = Object.keys(elements)[1];
            document.getElementById("cpu-choice").innerText = `Opponent choice: ${cpuElement}`;
            return cpuElement;
        case 2:
            cpuElement = Object.keys(elements)[2];
            document.getElementById("cpu-choice").innerText = `Opponent choice: ${cpuElement}`;
            return cpuElement;
    }
    
}
/**
 * A random number between 1-20 is picked for the player
 * is stored in a variable before any bonuses are added.
 */
function randomDiceRollPlayer() {
    let playerNumber = Math.floor(Math.random() * 20) + 1;
    return playerNumber;
    
    
}
/**
 * A random number between 1-20 is picked for the computer
 * and is stored in a variable before any bonuses are added.
 */
function randomDiceRollCpu() {
    let cpuNumber = Math.floor(Math.random() * 20) + 1;
    return cpuNumber;
    
    
}


function compareElements() {
cpuNumber = randomDiceRollPlayer();
playerNumber = randomDiceRollPlayer();
playerElement = document.getElementById("player-choice").innerText;


if (elements[playerElement] === cpuElement) {
    const finalPlayerNumber = playerNumber += 5;
    const finalCpuNumber = cpuNumber;
    
    return [finalPlayerNumber, finalCpuNumber]

} else if (elements[cpuElement] === playerElement) {
    const finalCpuNumber = cpuNumber += 5;
    const finalPlayerNumber = playerNumber;
    return [finalPlayerNumber, finalCpuNumber];
} else {
    const finalCpuNumber = cpuNumber;
    const finalPlayerNumber = playerNumber;
    return [finalPlayerNumber, finalCpuNumber];
};




    
}

function displayResult() {
    
}
function scoreTally() {
    
}
