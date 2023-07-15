// Wait for the DOM to load
// Event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") ==="submit") {
                alert("You clicked Begin Duel");
            } else {
            let elementType = this.getAttribute("data-type");
            alert(`You clicked the ${elementType} element`);
            }
        })
    }

})

function runDuel() {

}
function playerChoice() {
    
}
function cpuChoice() {
    
}
function randomDiceRoll() {
    
}
function compareElements() {
    
}
function chooseWinner() {
    
}
function displayResult() {
    
}
function scoreTally() {
    
}
function restartGame() {
    
}