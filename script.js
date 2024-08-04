const btn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreBoard = document.querySelector(".score");
const highScoreBoard = document.querySelector(".highscore");
const restart = document.querySelector(".again");
const input = document.querySelector('input');
const ans = document.querySelector('.ans');
const number = document.querySelector('.number')

const successSound = document.getElementById("sucess");
const failSound = document.getElementById("fail");

let random = Number(Math.floor(Math.random() * 20) + 1);
ans.innerHTML = random;
let highScore = 0;
let score = 20;

btn.addEventListener("click", handleGuess);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});

restart.addEventListener("click", normalize);

function handleGuess() {
  const val = Number(input.value);
  let flag = false; 

  if (score > 0) {
    if (val === random) {
      success();
      flag = true;
    } 
    
    else {
      if (val > random) {
        message.innerHTML = "📈 Too High";
      } else {
        message.innerHTML = "📉 Too Low";
      }
    }
  } else {
    message.innerHTML = "You Lost The Game 💔";
    failSound.play();
    return
  }

  if (!flag) score--;
  showData();
}

function success() {
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector("body").style.color = "white";
  message.innerHTML = "You Won 🏆";
  successSound.play();

  if (score > highScore) {
    highScore = score;
    highScoreBoard.innerHTML = highScore;
  }
  number.innerHTML = random
}

function normalize() {
  score = 20;
  random = Number(Math.floor(Math.random() * 20) + 1);
  ans.innerHTML = random; 
  input.value = "";
  message.innerHTML = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector("body").style.color = "";
  showData();
}

function showData() {
  input.value = ""; 
  highScoreBoard.innerHTML = highScore; 
  scoreBoard.innerHTML = score; 
}
