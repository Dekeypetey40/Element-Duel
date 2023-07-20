/*Constant variables*/
const elements = {
  fire: "nature",
  water: "fire",
  nature: "water",
};
const startButton = document.getElementById("begin-duel");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart");
const rollDice = document.getElementById("roll-dice");
const elementHeader = document.getElementById("element-heading");
const playerBonus = document.getElementById("players-bonus");
const cpuBonus = document.getElementById("cpu-bonus");
const playerFinal = document.getElementById("players-final");
const cpuFinal = document.getElementById("cpu-final");

/*
Wait for the DOM to load
Hide the Reset Button until the game starts
Event listeners for the buttons
Waits for element choice to use run
*/
document.addEventListener("DOMContentLoaded", function () {
  //Hide the restart and roll dice buttons
  document.getElementById("restart").style.display = "none";
  document.getElementById("roll-dice").style.display = "none";

  //start button event listener
  //Hides the start button, shows restart
  startButton.addEventListener("click", function () {
    elementHeader.innerText = "Choose your element";
    startButton.style.display = "none";
    document.getElementById("restart").style.display = "";
    //Listens for element button to be clicked
    //and assigns that element to player
    let elementButtons = document.getElementsByClassName("element");
    for (let element of elementButtons) {
      element.addEventListener("click", function () {
        elementHeader.innerText = "Your choice has been made"
        resultElement.innerText =
          "Roll the dice and the winner will be determined";
        document.getElementById("cpu-choice").innerText = ` ?`;
        let playerElement = this.getAttribute("data-type");
        document.getElementById("player-choice").innerText = `${playerElement}`;
        document.getElementById("roll-dice").style.display = "";
        return playerElement;
      });
    }
  });

  //Event Listener for roll dice button
  rollDice.addEventListener("click", function () {
    chooseWinner();
  });
  //Inspired by code from stackoverflow
  restartButton.addEventListener("click", function () {
    location.reload();
  });

  //Listen for player clicking element button
});

/**
 * A random number is generated between 0-2.
 * Depending on the result the function gets the
 * corresponding key from the elements object
 * and assigns it to the cpuElement variable.
 */
function cpuChoice() {
  const compChoice = Math.floor(Math.random() * 3);
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
 * A random number between 1-20 is chosen and
 * is returned before any bonuses are added.
 */
function randomDiceRoll() {
  return Math.ceil(Math.random() * 20);
}

/**
 * Compares the elements chosen by player and computer.
 * The one who picks an advantageous element is granted
 * +5 onto their random number and then both random numbers
 * are returned by the function in an array.
 */
function compareElements(playerElement, cpuElement) {
  const cpuNumber = randomDiceRoll();
  const playerNumber = randomDiceRoll();
  const playerRollElement = document.getElementById("players-roll");
  const cpuRollElement = document.getElementById("cpu-roll");
  playerRollElement.innerText = playerNumber;
  cpuRollElement.innerText = cpuNumber;

  /*Learned how to make js return multiple values from  
  https://www.scaler.com/topics/javascript-return-multiple-values/ */
  if (elements[playerElement] === cpuElement) {
    const finalPlayerNumber = playerNumber + 5;
    const finalCpuNumber = cpuNumber;
    playerBonus.innerText = ` +5`;
    cpuBonus.innerText = ` 0`;
    elementHeader.innerText = `${playerElement} is super effective against ${cpuElement}!`;

    return [finalPlayerNumber, finalCpuNumber];
  } else if (cpuElement === playerElement) {
    const finalCpuNumber = cpuNumber;
    const finalPlayerNumber = playerNumber;
    playerBonus.innerText = ` 0`;
    cpuBonus.innerText = ` 0`;
    elementHeader.innerText = `Equal elements!`;

    return [finalPlayerNumber, finalCpuNumber];
  } else {
    const finalCpuNumber = cpuNumber + 5;
    const finalPlayerNumber = playerNumber;
    playerBonus.innerText = ` 0`;
    cpuBonus.innerText = ` +5`;
    elementHeader.innerText = `${cpuElement} is super effective against ${playerElement}!`;

    return [finalPlayerNumber, finalCpuNumber];
  }
}
/**
 * The function first reveals what element the cpu picked, then
 * looks at the final results to which is bigger or if they are even
 * and then declares the result on the DOM and returns a winner variable
 */
function chooseWinner(playerNumber, cpuNumber) {
  const cpuElement = cpuChoice();
  document.getElementById("cpu-choice").innerText = ` ${cpuElement}`;
  const playerElement = document.getElementById("player-choice").innerText;
  const [finalPlayerNumber, finalCpuNumber] = compareElements(
    playerElement,
    cpuElement
  );
  if (finalPlayerNumber > finalCpuNumber) {
    resultElement.innerText = `You have won!`;
    playerFinal.innerHTML = ` ${finalPlayerNumber}`;
    cpuFinal.innerHTML = ` ${finalCpuNumber}`;
    let winner = "player";
    scoreTally(winner);
    return winner;
  } else if (finalCpuNumber > finalPlayerNumber) {
    document.getElementById("result").innerText = `You have lost!`;
    playerFinal.innerHTML = ` ${finalPlayerNumber}`;
    cpuFinal.innerHTML = ` ${finalCpuNumber}`;
    let winner = "cpu";
    scoreTally(winner);
    return winner;
  } else {
    resultElement.innerText = `You have tied!`;
    playerFinal.innerHTML = ` ${finalPlayerNumber}`;
    cpuFinal.innerHTML = ` ${finalCpuNumber}`;
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
