import image from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const goblin = document.createElement("img");
  goblin.src = image;

  let currentCell = 0;

  function randomMovie() {
    cells[currentCell].innerHTML = "";
    currentCell = Math.floor(Math.random() * cells.length);
    cells[currentCell].append(goblin);
  }

  setInterval(randomMovie, 2000);
});