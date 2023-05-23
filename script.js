const gridContainer = document.getElementById("grid-container");
let slider = document.getElementById('slider');
let output = document.getElementById('grid-size');
let gridUpdate = document.getElementById('update-grid');
let colorPickerBtn = document.getElementById('colorPicker');
let colorPicker = document.createElement('input');
colorPicker.type = 'color'
let backgroundColorPicker = document.createElement('input');
backgroundColorPicker.type = 'color'
let color = "";
let eraser = document.getElementById('eraser');
let toggleGridBtn = document.getElementById('toggleGrid');
let eraserbuttonState = false;
let toggleGridBtnState = false;
let backgroundColorBtn = document.getElementById('backgroundColor');
let gridBackgroundColor = 'white';
output.innerHTML = slider.value + "x" + slider.value;

slider.oninput = function () {
    output.innerHTML = this.value + "x" + this.value;
};

// this function draws a 16 x 16 default grid
function defaultGrid () {
  drawGrid(16, 16);
};

defaultGrid()

// this event listener listens for the "Pen Color" button to be clicked 
// and brings up the colour picker
colorPickerBtn.addEventListener('click', () => {
  colorPicker.click();
});

// this listener listens for a change in the value of the colour picker 
// and assigns said value to the "color" variable
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
      if (eraserbuttonState == true) {
        color = gridBackgroundColor;
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
  toggleGrid();
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
function toggleButton (button, state) {
  if (state) {
    resetButton(button);
    state = false;
    return state;
  }

  else {
    colorButton(button);
    state = true; 
    return state;
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

// this event listener, listens for a click event 
// and toggles the condition of the eraser
eraser.addEventListener('click', () => {
  toggleButton(eraser, eraserbuttonState);
  if (eraserbuttonState == false) {
    eraserbuttonState = true;
  }

  else {
    eraserbuttonState = false;
  };
});

// this listener listens for when the "toggle grid" button gets clicked 
// and toggles the button condition
toggleGridBtn.addEventListener('click', () => {
  toggleButton(toggleGridBtn, toggleGridBtnState);
  if (toggleGridBtnState == false) {
    toggleGridBtnState = true;
    toggleGrid();
    return toggleGridBtnState
  }

  else {
    toggleGridBtnState = false;
    toggleGrid();
  };
});

// this function applies the hover effect to the eraser button when eraser is off
function hoverEraser() {
  if (eraserbuttonState == false) {
    eraser.addEventListener('mouseover', () => {
      colorButton(eraser);
    });
    
    eraser.addEventListener('mouseleave', () => {
      if (eraserbuttonState == false) {
        resetButton(eraser);
      };
    });
  };
};

// this function applies the hover effect to the toggle grid button 
// when the grid is visible
function hoverToggleGrid() {
  if (toggleGridBtnState == false) {
    toggleGridBtn.addEventListener('mouseover', () => {
      colorButton(toggleGridBtn);
    });
    
    toggleGridBtn.addEventListener('mouseleave', () => {
      if (toggleGridBtnState == false) {
        resetButton(toggleGridBtn);
      };
    });
  };
};

hoverEraser();
hoverToggleGrid();

// this function changes the background colour of the grid
function changeBackgroundColor() {
  gridContainer.style.backgroundColor = gridBackgroundColor;
};

// this event listener listens for a "click" event on the "Background Colour" button 
// and triggers the colour picker
backgroundColorBtn.addEventListener('click', () => {
  backgroundColorPicker.click();
});

// this event listener listens for a change in value of the background colour picker 
// and sets the background colour of the grid accordingly
backgroundColorPicker.addEventListener('change', () => {
  gridBackgroundColor = backgroundColorPicker.value;
  changeBackgroundColor();
  toggleGrid();
});

// this function applies the toggle effect on the "toggle grid" button
function toggleGrid() {
  if (toggleGridBtnState == true) {
    let gridItem = document.querySelectorAll('#grid-item');
    gridItem.forEach((gridItem) => {
      gridItem.style.borderStyle = 'solid';
      gridItem.style.borderWidth = '1px';
      gridItem.style.borderColor = gridBackgroundColor;
    });
  }

  else {
    let gridItem = document.querySelectorAll('#grid-item');
    gridItem.forEach((gridItem) => {
      gridItem.style.borderStyle = 'solid';
      gridItem.style.borderWidth = '1px';
      gridItem.style.borderColor = '#858484';
    });
  };
};