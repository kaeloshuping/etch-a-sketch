const gridContainer = document.getElementById("grid-container");
let slider = document.getElementById('slider')
let output = document.getElementById('grid-size')
let gridUpdate = document.getElementById('update-grid')
output.innerHTML = slider.value + "x" + slider.value

slider.oninput = function () {
    output.innerHTML = this.value + "x" + this.value
}

function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  };
};

// let sliderValue = slider.value
// makeRows(sliderValue, sliderValue)

gridUpdate.addEventListener('click', function () {
  removeAllChildNodes(gridContainer);
  let sliderValue = slider.value;
  makeRows(sliderValue, sliderValue);
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  };
};
