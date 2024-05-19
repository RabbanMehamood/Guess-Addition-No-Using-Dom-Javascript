let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

let userInput = document.getElementById("userInput");
let userInputValue = parseInt(userInput.value);
let gameResult = document.getElementById("gameResult");

function restartButton() {
    let random1 = Math.ceil(Math.random() * 100);
    let random2 = Math.ceil(Math.random() * 100);
    firstNumber.textContent = random1;
    secondNumber.textContent = random2;

    gameResult.textContent = "";
    userInput.value = "";
}

restartButton();



function checkButton() {

    let firstNumberInt = parseInt(firstNumber.textContent);
    let secondNumberInt = parseInt(secondNumber.textContent);
    let sum = firstNumberInt + secondNumberInt;
    let userEntered = parseInt(userInput.value)


    if (userEntered === sum) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
}
