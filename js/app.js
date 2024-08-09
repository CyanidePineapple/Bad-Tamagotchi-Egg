/*-------------------------------- Constants --------------------------------*/
const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

/*---------------------------- Variables (state) ----------------------------*/
let timer;
let gameOver = false;

/*------------------------ Cached Element References ------------------------*/
const statEls = {
  boredom: document.getElementById("boredom-stat"),
  hunger: document.getElementById("hunger-stat"),
  sleepiness: document.getElementById("sleepiness-stat"),
};

const buttons = {
  play: document.getElementById("play"),
  feed: document.getElementById("feed"),
  sleep: document.getElementById("sleep"),
};

const gameMessageEl = document.getElementById("message");
const resetBtnEl = document.getElementById("restart");

/*-------------------------------- Functions --------------------------------*/
function init() {

  gameOver = false;

  resetBtnEl.classList.add("hidden");
  gameMessageEl.classList.add("hidden");

  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;

  render();

  timer = setInterval(runGame, 2000);
}

function runGame() {
  updateStates();
  checkGameOver();
  render();
}

function updateStates() {
  for (let key in state) {
    state[key] += getRandomInt(4);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkGameOver() {
  if (Object.values(state).some(stat => stat >= 10)) {
    gameOver = true;
  }
}

function render() {
  for (let key in state) {
    statEls[key].textContent = state[key];
  }

  if (gameOver) {
    clearInterval(timer);
    gameMessageEl.textContent = "Oh no! You Lose!";
    gameMessageEl.classList.remove("hidden");
    resetBtnEl.classList.remove("hidden");
  }
}

/*----------------------------- Event Listeners -----------------------------*/
buttons.play.addEventListener("click", () => {
  state.boredom = 0;
  render();
});

buttons.feed.addEventListener("click", () => {
  state.hunger = 0;
  render();
});

buttons.sleep.addEventListener("click", () => {
  state.sleepiness = 0;
  render();
});

resetBtnEl.addEventListener("click", init);

init();
