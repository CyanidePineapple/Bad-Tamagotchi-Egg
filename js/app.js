/*-------------------------------- Constants --------------------------------*/
const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

/*---------------------------- Variables (state) ----------------------------*/
let timer;

let gameOver;
/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.getElementById("boredom-stat");
const hungerStatEl = document.getElementById("hunger-stat");
const sleepinessStatEl = document.getElementById("sleepiness-stat");

console.log(boredomStatEl, hungerStatEl, sleepinessStatEl);

const playBtnEl = document.getElementById("play");
const feedBtnEl = document.getElementById("feed");
const sleepBtnEl = document.getElementById("sleep");

// console.log(playBtnEl, feedBtnEl, sleepBtnEl);

const gameMessageEl = document.getElementById("message");

console.log(gameMessageEl);

const resetBtnEl = document.getElementById("reset");

// console.log(resetBtnEl);

/*-------------------------------- Functions --------------------------------*/
function init() {
  console.log("Game initialized!");

  gameOver = false;

  timer = setInterval(runGame, 2000);

  render();

  init();

  gameOver = false;

  timer = setInterval(runGame, 2000);
}

function runGame() {
  console.log("The game is running!");
}

function render() {}
function updateStates() {}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateStates() {
  state.boredom += getRandomInt(4);
  state.hunger += getRandomInt(4);
  state.sleepiness += getRandomInt(4);

  function runGame() {
    updateStates();
    render();
  }
  function render() {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = BtnElstate.hunger;
    sleepinessStatEl.textContent = state.sleepiness;
  }
}

function checkGameOver() {
  if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
    gameOver = true;
  }
}
function runGame() {
  updateStates();
  checkGameOver();
  render();
}


function render() {
  if (gameOver) {
    clearInterval(timer);
    gameMessageEl.textContent = "Game Over!";
    gameMessageEl.classList.remove("hidden");
    resetBtnEl.classList.remove("hidden");
  } else {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;
  }
}

/*----------------------------- Event Listeners -----------------------------*/
function playBtnClick() {
  state.boredom = 0;
  render();

  playBtnEl.addEventListener("click", playBtnClick);
}

function feedBtnClick() {
  state.hunger = 0;
  render();

  feedBtnEl.addEventListener("click", feedBtnClick);
}

function sleepBtnClick() {
  state.sleepiness = 0;
  render();

  sleepBtnEl.addEventListener("click", sleepBtnClick);
  resetBtnEl.addEventListener("click", init);
}

function init() {
  console.log("Game initialized");

  resetBtnEl.classList.add("hidden");
  gameMessageEl.classList.add("hidden");

  gameOver = false;

  timer = setInterval(runGame, 2000);

  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;

  render();
}
init();
