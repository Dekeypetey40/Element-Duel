
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
//Calls the cpuChoice() function
        let elementButtons = document.getElementsByClassName("element");
        for (let element of elementButtons){
        element.addEventListener("click", function() {
        document.getElementById("result").innerText = "Roll the dice and the winner will be determined";
        document.getElementById("cpu-choice").innerText = ` ?`;
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

function cpuChoice() {
    compChoice = Math.floor(Math.random() *3)
    let cpuElement;
    switch (compChoice) {
        case 0:
            cpuElement = Object.keys(elements)[0];
            return cpuElement;
        case 1:
            cpuElement = Object.keys(elements)[1];
            return cpuElement;
        case 2:
            cpuElement = Object.keys(elements)[2];
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

/**
 * Compares the elements chosen by player and computer.
 * The one who picks an advantageous element is granted
 * +5 onto their random number and then both random numbers
 * are returned by the function in an array
 */
function compareElements() {
cpuNumber = randomDiceRollPlayer();
playerNumber = randomDiceRollPlayer();
playerElement = document.getElementById("player-choice").innerText;
cpuElement = cpuChoice();

/*Learned how to make js return multiple values from  
https://www.scaler.com/topics/javascript-return-multiple-values/ */
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
/**
 * The function first reveals what element the cpu picked, then  
 * looks at the final results to which is bigger or if they are even 
 * and then declares the result on the DOM and returns a winner variable
 */
function chooseWinner(playerNumber, cpuNumber) {
    cpuElement = cpuChoice();
    document.getElementById("cpu-choice").innerText = ` ${cpuElement}`;
    const [finalPlayerNumber, finalCpuNumber] = compareElements();
    if (finalPlayerNumber > finalCpuNumber) {
        document.getElementById("result").innerText = `You have won! You rolled ${finalPlayerNumber}. Your opponent rolled ${finalCpuNumber}.`;
        let winner = "player"
        scoreTally(winner);
        return winner;
    } else if (finalCpuNumber > finalPlayerNumber) {
        document.getElementById("result").innerText = `You have lost! You rolled ${finalPlayerNumber}. Your opponent rolled ${finalCpuNumber}.`;
        let winner = "cpu"
        scoreTally(winner);
        return winner;
    } else {
        document.getElementById("result").innerText = `You have tied! You rolled both rolled ${finalPlayerNumber}.`;
    }
    
}
/**
 * The function reads the winner variable which
 * says if the player won or lost. A point is 
 * then added to the correct tally.
 */
function scoreTally(winner) {
    let oldWins = parseInt(document.getElementById("wins").innerText);
    let oldLosses = parseInt(document.getElementById("losses").innerText);
    if (winner === "player") {
        document.getElementById("wins").innerText = ++oldWins;
    } else if (winner === "cpu") {
        document.getElementById("losses").innerText = ++oldLosses;
    }
}
