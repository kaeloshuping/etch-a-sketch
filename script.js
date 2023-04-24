function makeRows(rows, cols) {
    let gridContainer = document.getElementById('grid-container');
    // gridContainer.style.setProperty('--grid-rows', rows);
    // gridContainer.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.style.borderStyle = 'solid'
        cell.style.borderWidth = '1px'
        cell.style.width = '10px'
        cell.style.height = '10px'
        gridContainer.appendChild(cell).className = "gridCell";
    };
};

makeRows(50, 50)
