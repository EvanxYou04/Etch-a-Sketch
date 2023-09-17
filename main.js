console.log("hello world");
let paint = "#ffffff"; // default color
function red() {
  paint = "#ff0000";
}
function blue() {
  paint = "#00ff00";
}
function green() {
  paint = "#0000ff";
}

function clear() {
  console.log("clear");
}

const container = document.querySelector(".canvas-container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(2, 2);
