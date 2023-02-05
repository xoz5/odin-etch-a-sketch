let gridItemCount = 16;
const gridContainer = document.querySelector('.grid-container');
const btn = document.querySelector('button');
btn.addEventListener('click', changeGridSize);
addDivsToGridContainer(gridItemCount);

function addDivsToGridContainer(gridItemCount) {
    let i = 0;
    while(i < gridItemCount) {
        let n = 0;
        while(n < gridItemCount) {
            let gridItem = document.createElement('div');
            gridContainer.appendChild(gridItem);
            n++;
        } i++;
    }
    
    // Change div colors by hovering
    const divs = document.querySelectorAll('.grid-container>div');
    divs.forEach(div => div.addEventListener('mouseover', changeGridColorByHover));
}

function changeGridColorByHover(divHovered) {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    divHovered.target.style.backgroundColor = randomColor;
}

function changeGridSize() {
    let gridSizePreference = 0;

    do {
        gridSizePreference = prompt('Input a grid size of less than or equal to 100');
    } while(gridSizePreference > 100);

    gridContainer.setAttribute('style', `grid-template-rows: repeat(${gridSizePreference}, auto); grid-template-columns: repeat(${gridSizePreference},auto);`);

    addDivsToGridContainer(gridSizePreference);
}