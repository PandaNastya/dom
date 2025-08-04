import image from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const cells = [];
  const container = document.querySelector(".container");
  const goblin = document.createElement("img");
  goblin.src = image;
  let currentCell = 0;

  for(let i = 0; i < 16; i++) {
    let cell = document.createElement("div");
    container.append(cell);
    cells.push(cell);
  }

  function randomMovie() {
    cells[currentCell].innerHTML = "";
    let newCell;
    do {
      newCell = Math.floor(Math.random() * cells.length);
    } while (newCell === currentCell);
    cells[newCell].append(goblin);
  }

  setInterval(randomMovie, 2000);
});