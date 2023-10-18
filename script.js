"use strict";
/*
//DOM manipulaion

//To read content in the element
console.log(document.querySelector(".message").textContent);

//To add content
document.querySelector(".message").textContent = "Finish Guessing i am tired!!";
console.log(document.querySelector(".message").textContent);
//To read input value
document.querySelector(".guess").value = 24;
console.log(document.querySelector(".guess").value);

*/

/*
//Function value and expression
const x=function(){
    console.log('i am function value and i became function expression!');
}
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highscore = 0;

//DRY Principle
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //0 is a falsy value
  // When there is no value
  if (!guess) {
    //document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number!"); // DRY- refactoring code
  }

  //when there is correct value
  else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "Correct Number!!";
    displayMessage("Correct Number!!"); //DRY -Refactoring
    //css changes in js using class selector
    //in css background-color --> backgroundColor in js
    //Value should be in ''
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // DRY Principle
  //When there is incorrect value
  else if (guess !== secretNumber) {
    if (score > 1) {
      /*document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High!!" : "Too Low!!";
        */
      displayMessage(guess > secretNumber ? "Too High!!" : "Too Low!!"); //DRY -refactoring
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "You lost the game!!";
      displayMessage("You lost the game!!"); // DRY -Refactoring
      document.querySelector(".score").textContent = 0;
    }
  }

  /*
  //-----------------
  //When guess is greater
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
  }
  //When guess is lower
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
  }
  //------------------
  */
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing...!!";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
