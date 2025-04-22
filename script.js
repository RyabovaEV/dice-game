const diceResult = document.querySelector("[data-result]");
const diceBtn = document.querySelector("[data-throw-dice]");
const dice = document.querySelector("[data-dice]");

diceBtn.addEventListener("click", () => {
  render();
})

const render = () => {
  const player1 = getRandomNumber();
  const player2 = getRandomNumber();

  dice.innerHTML = "";
  dice.insertAdjacentHTML("beforeend", `
      <svg class="dice dice--red dice--animated" aria-label="Кости игрока 1">
        <use href="assets/sprites.svg#dice_${player1}"></use>
      </svg>
      <svg class="dice dice--blue dice--animated"  aria-label="Кости игрока 1">
        <use href="assets/sprites.svg#dice_${player2}"></use>
      </svg>
    `);

    setTimeout(() => {
      document.querySelectorAll(".dice").forEach(el => {
        el.classList.remove("dice--animated");
      });
    }, 500);

    whoIsWinner(player1, player2);
}

const getRandomNumber = () => Math.ceil(Math.random() * 6);

const whoIsWinner = (player1, player2) => {
  let message = "";
  let className = "dice-result";

  if (player1 > player2) {
    className += " dice-result--red";
    message = "Выиграл игрок 1";
  } else if (player1 < player2) {
    className += " dice-result--blue";
    message = "Выиграл игрок 2";
  } else {
    message = "Ничья!";
  }

  diceResult.innerHTML = `<h3 class="${className}">${message}</h3>`;
}

render();