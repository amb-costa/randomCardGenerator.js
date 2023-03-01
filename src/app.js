/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".card").innerHTML = randomNumber();
  setInterval(() => {
    document.querySelector(".card").classList.remove(randomSuit());
    document.querySelector(".card").classList.add(randomSuit());
    document.querySelector(".card").innerHTML = randomNumber();
  }, 10000);
};

function randomNumber() {
  let nmb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let picked = Math.floor(Math.random() * nmb.length);
  return nmb[picked];
}

function randomSuit() {
  let suit = ["diamond", "spades", "heart", "club"];
  let picked = Math.floor(Math.random() * suit.length);
  return suit[picked];
}
