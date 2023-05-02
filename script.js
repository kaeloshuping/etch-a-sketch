const gridContainer = document.getElementById("grid-container");
let slider = document.getElementById('slider');
let output = document.getElementById('grid-size');
let gridUpdate = document.getElementById('update-grid');
output.innerHTML = slider.value + "x" + slider.value;

slider.oninput = function () {
    output.innerHTML = this.value + "x" + this.value;
};

// this functions takes 2 variables,  one for the number of rows and one for the 
// number of columns and draws a grid
function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.id = "grid-item";
    cell.addEventListener('mouseover', () => {
      draw(cell, 'red')
    })
    gridContainer.appendChild(cell).className = "grid-item";
  };
};

// this event listener listens for a "click" event from the Update Grid button and removes 
// the previous grid and draws a new one with different parameters
gridUpdate.addEventListener('click', function () {
  removeAllChildNodes(gridContainer);
  let sliderValue = slider.value;
  makeRows(sliderValue, sliderValue);
});

// this function removes all child nodes fo a given element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};

// this function takes a gridItem and a background colour as parameters and 
// changes the colour of the cell to the background colour
function draw(cell, colour) {
  cell.style.backgroundColor = colour
}