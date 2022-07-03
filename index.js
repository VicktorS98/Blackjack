const gameContainer = document.querySelector(".container");
const startGame = document.querySelector(".startGame");
const cardText = document.querySelector(".card-p");
const sum = document.querySelector(".sum");
const moneyHTML = document.querySelector(".money");
const stopButton = document.querySelector(".stop");
const message = document.querySelector(".message");
const rules = document.querySelector(".rules");
const youWon = document.querySelector(".youWon");
const blackjack = document.querySelector(".blackjack");

var money = 100;
var start = true;
var storedNumbers = [];
var sumStored = 0;

startGame.addEventListener("click", function () {
    if (start == true) {
        storedNumbers= [];
        cardText.innerText = "Cards: ";
        money = money - 5;
        moneyHTML.innerText = "$" + money;
        blackjack.classList.add("hidden");
    }
    start = false;
    rules.classList.add("hidden");
    cardText.classList.remove("hidden");
    message.innerText = "";
    startGame.innerText = "One more card";
    stopButton.classList.remove("hidden");
    let randomNumber = Math.floor(Math.random() * 10 + 2);
    storedNumbers.push(randomNumber);
    sumStored = storedNumbers.reduce((a, b) => a + b, 0);
    cardText.append(randomNumber + " - ");
    sum.innerText = "";
    sum.append("Sum: " + sumStored);

    if (sumStored > 21) {
      stopButton.classList.add("hidden");
      startGame.innerText = "Play Again";
      start = true;
      startGame.innerText = "Play Again";
      message.innerText = "You went over 21. Click to Start Over";
    } else if (sumStored == 21) {
      money += 100;
      moneyHTML.innerText = "$" + money;
      stopButton.classList.add("hidden");
      startGame.innerText = "Play Again";
      start = true;
      blackjack.classList.remove("hidden");
      setTimeout(function() {
        checkMoney();
      }, 3000)
    }
});


function checkMoney() {
    if (money >= 200) {
        gameContainer.classList.add("hidden");
        youWon.classList.remove("hidden");
    }
}

stopButton.addEventListener("click", function () {
    if (sumStored < 14) {
        reset();
    } else if (sumStored >= 14 && sumStored <= 16) {
        console.log("hola");
        money += 10;
        reset();
    } else if (sumStored >= 17 && sumStored <= 20) {
        console.log("chau");
        money += 20;
        reset();
    }

    checkMoney();
});

function reset() {
    moneyHTML.innerText = "$" + money;
    stopButton.classList.add("hidden");
    cardText.innerText = "Cards: ";
    sum.innerText = "";
    startGame.innerText = "Play Again";
    message.innerText = "";
    sumStored = 0;
    storedNumbers = [];
    start = true;
    cardText.classList.add("hidden");
}

