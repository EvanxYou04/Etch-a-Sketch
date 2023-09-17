console.log("hello world");
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

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mousedown", (e) => {
      e.target.style.backgroundColor = paint;
    });
  }
}

makeRows(2, 2);
