//Html Elements

const turns = document.querySelector(".turns");
const reset = document.querySelector(".reset");
const gameBoxs = document.querySelectorAll(".game-box");

//game const

const xSymbol = "x";
const oSymbol = "o";

// Game Variables

let gameStarts = true;
let xTurn = true;

// fucntion

const letterToSymbol = (letter) => (letter == "x" ? xSymbol : oSymbol);

const win = (letter) => {
  gameStarts = false;

  if (letter == "x") {
    turns.innerHTML = `${letterToSymbol(letter)} is winner!`;
  } else {
    turns.innerHTML = `<span> ${letterToSymbol(letter)} is winner!</span>`;
  }
};

const gamestatus = () => {
  const tl = gameBoxs[0].classList[2];
  const tm = gameBoxs[1].classList[2];
  const tr = gameBoxs[2].classList[2];
  const ml = gameBoxs[3].classList[2];
  const mm = gameBoxs[4].classList[2];
  const mr = gameBoxs[5].classList[2];
  const bl = gameBoxs[6].classList[2];
  const bm = gameBoxs[7].classList[2];
  const br = gameBoxs[8].classList[2];

  //checking winner

  if (tl && tl === tm && tl === tr) {
    win(tl);
  } else if (ml && ml === mm && ml === mr) {
    win(ml);
  } else if (bl & (bl === bm) && bl === br) {
    win(bl);
  } else if (tl && tl === ml && tl === bl) {
    win(tl);
  } else if (tm && tm === mm && tm === bm) {
    win(tm);
  } else if (tr && tr === mr && tr === br) {
    win(tr);
  } else if (tl && tl == mm && tl == br) {
    win(tl);
  } else if (tr && tr == mm && tr == bl) {
    win(tr);
  } else if (tl && tm && tr && ml && mm && mr && bl && bm && br) {
    gameStarts = false;
    turns.innerHTML = "It's a tie";
  } else {
    xTurn = !xTurn;
    if (xTurn) {
      turns.innerHTML = `${xSymbol} is next`;
    } else {
      turns.innerHTML = `<span> ${oSymbol} is next </span>`;
    }
  }
};

// Event Handlers

const gameReset = (e) => {
  // console.log(e);
  xTurn = true;
  gameStarts = true;
  turns.innerHTML = `${xSymbol} is next`;

  for (const gamebox of gameBoxs) {
    gamebox.classList.remove("x");
    gamebox.classList.remove("o");
  }
};

const gameBoxClick = (e) => {
  const classList = e.target.classList;
  // const location = e.target.classList[1];
  // console.log(classList);

  if (!gameStarts || classList[2] == "x" || classList[2] == "o") {
    return;
  }

  if (xTurn) {
    classList.add("x");
    gamestatus();

    // xTurn = !xTurn;
  } else {
    classList.add("o");
    gamestatus();

    // xTurn = !xTurn;
  }
};

//Event Listeners
reset.addEventListener("click", gameReset);

for (const gameBox of gameBoxs) {
  gameBox.addEventListener("click", gameBoxClick);
}
