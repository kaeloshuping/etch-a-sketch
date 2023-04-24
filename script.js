const container = document.getElementById("grid-container");
let slider = document.getElementById('slider')
let output = document.getElementById('grid-size')
output.innerHTML = slider.value + "x" + slider.value

let sliderValue = slider.value

slider.oninput = function () {
    output.innerHTML = this.value + "x" + this.value
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(sliderValue, sliderValue);