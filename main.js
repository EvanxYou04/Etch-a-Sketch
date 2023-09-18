let size = 16; //starting size
let paint = '#ffffff'; // default color
let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const container = document.querySelector('.canvas-container');
const colorPicker = document.querySelector('#colorPicker');
const clearButton = document.querySelector('#clearBtn');

clearButton.addEventListener('click', () => {
    console.log('clear');
    container.innerHTML = '';
    makeGrid(size);
});
colorPicker.addEventListener('change', updatePaint);

function makeGrid(sideLen) {
    container.style.setProperty('--grid-rows', sideLen);
    container.style.setProperty('--grid-cols', sideLen);
    for (c = 0; c < sideLen * sideLen; c++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        container.appendChild(cell).className = 'grid-item';
    }
}

function updatePaint(e) {
    paint = e.target.value;
    console.log(paint);
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = paint;
}
makeGrid(16);
