var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var setImageLocation1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var setImageLocation2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", setImageLocation1);
document.querySelectorAll("img")[1].setAttribute("src", setImageLocation2);


if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Draw 🚩";
}
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!!";
}

else {
  document.querySelector("h1").innerHTML = "Player 2 wins!! 🚩";
}
