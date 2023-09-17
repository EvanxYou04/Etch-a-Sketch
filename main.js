const size = 2;
let paint = "#ffffff"; // default color
function red() {
  paint = "#ff0000";
  console.log(paint);
}
function blue() {
  paint = "#0000ff";
}
function green() {
  paint = "#00ff00";
}

function clear() {
  console.log("clear");
}

const container = document.querySelector(".canvas-container");

function makeGrid(sideLen) {
  container.style.setProperty("--grid-rows", sideLen);
  container.style.setProperty("--grid-cols", sideLen);
  for (c = 0; c < sideLen * sideLen; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mousedown", changeColor);
    cell.addEventListener("mouseover", changeColor);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = paint;
}
makeGrid(2);
