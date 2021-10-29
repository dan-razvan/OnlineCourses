function loadImage(n, ranNum) {
  return document.querySelector(`.img${n}`).setAttribute("src", `images/dice${ranNum}.png`)
};

function go() {
  if(randomNumber1 === randomNumber2){
    return document.querySelector("h1").innerHTML = "Draw!"
  }else if(randomNumber1 > randomNumber2){
    return document.querySelector("h1").innerHTML = "Player 1 Wins"
  }else{
    return document.querySelector("h1").innerHTML = "Player 2 Wins"
  }
}
