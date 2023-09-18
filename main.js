const size = 2;

let paint = "#ffffff"; // default color
let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function clear() {
  paint = "#ffffff";
}

const container = document.querySelector(".canvas-container");
const colorPicker = document.querySelector("#colorPicker");

colorPicker.addEventListener("change", updatePaint);

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

function updatePaint(e) {
  paint = e.target.value;
  console.log(paint);
}

function changeColor(e) {
  e.target.style.backgroundColor = paint;
}
makeGrid(16);
