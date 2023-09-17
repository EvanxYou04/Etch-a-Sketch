console.log("hello world");
let paint = "#ffffff"; // default color
function red() {
  console.log("red");
}
function blue() {
  console.log("blue");
}
function green() {
  console.log("green");
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
