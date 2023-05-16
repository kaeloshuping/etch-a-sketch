const gridContainer = document.getElementById("grid-container");
let slider = document.getElementById('slider');
let output = document.getElementById('grid-size');
let gridUpdate = document.getElementById('update-grid');
let colorPickerBtn = document.getElementById('colorPicker');
let colorPicker = document.createElement('input');
colorPicker.type = 'color'
let color = "";
let eraser = document.getElementById('eraser');
let eraserState = false;
output.innerHTML = slider.value + "x" + slider.value;

slider.oninput = function () {
    output.innerHTML = this.value + "x" + this.value;
};

colorPickerBtn.addEventListener('click', () => {
  colorPicker.click();
});

colorPicker.addEventListener('change', () => {
  color = colorPicker.value;
});

// this functions takes 2 variables,  one for the number of rows and one for the 
// number of columns and draws a grid
function drawGrid(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.id = "grid-item";
    cell.addEventListener('mouseover', () => {
      if (eraserState == true) {
        color = 'burlywood';
        draw(cell, color);
      } 
      else {
        colour();
        draw(cell, color);
      };
    });
    gridContainer.appendChild(cell).className = "grid-item";
  };
};

// this event listener listens for a "click" event from the Update Grid button and removes 
// the previous grid and draws a new one with different parameters
gridUpdate.addEventListener('click', function () {
  removeAllChildNodes(gridContainer);
  let sliderValue = slider.value;
  drawGrid(sliderValue, sliderValue);
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
  cell.style.backgroundColor = colour;
};

// this function gets the value of the colour picker and changes the value of the 
// "color" variable
const colour = function () {
  color = colorPicker.value;
};

// this fuction takes the state of the eraser as a parameter and toggles it to 
// an opposite state
function toggleEraser (state) {
  if (state) {
    resetButton(eraser);
    eraserState = false;
    return eraserState;
  }

  else {
    colorButton(eraser)
    eraserState = true; 
    return eraserState;
  }; 
};

// this function takes a button as a parameter and resets it's CSS Properties 
// to the default button
function resetButton (button) {
  button.style.backgroundColor = 'white';
  button.style.padding = '15px';
  button.style.borderRadius = '15px';
  button.style.color = 'black';
};

// this function takes a button as a parameter and changes it's CSS Properties 
// to the state of an active button
function colorButton (button) {
  button.style.backgroundColor = '#565e69';
  button.style.color = 'white';
  button.style.border = '1px solid white';
};

// this event listener, listens for a click event and toggles the condition of the eraser
eraser.addEventListener('click', () => {
  toggleEraser(eraserState);
});

// this function takes the state of a button as well as a button 
// and creates a hover effect on selected button
function hoverButton(button) {
  colorButton(button);
};

// checks whether eraser is in a "false" condition and applies hover effect
if (eraserState == false) {
  eraser.addEventListener('mouseover', () => {
    hoverButton(eraser);
  });
  
  eraser.addEventListener('mouseleave', () => {
    if (eraserState == false) {
      resetButton(eraser);
    };
  });
};
