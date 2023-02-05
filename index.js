let gridItemCount = 16;
let darkerColor = 1;
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
    let redDark = (Math.floor(Math.random()*255)*darkerColor);
    let greenDark = (Math.floor(Math.random()*255)*darkerColor);
    let blueDark = (Math.floor(Math.random()*255)*darkerColor);
    divHovered.target.style.backgroundColor = `rgb(${redDark}, ${greenDark}, ${blueDark})`;
    darkerColor -= 0.1;
}

function changeGridSize() {
    let gridSizePreference = 0;

    do {
        gridSizePreference = prompt('Input a grid size of less than or equal to 100');
    } while(gridSizePreference > 100);
    darkerColor = 1;
    removeChildren(gridContainer);

    gridContainer.setAttribute('style', `grid-template-rows: repeat(${gridSizePreference}, auto); grid-template-columns: repeat(${gridSizePreference},auto);`);

    addDivsToGridContainer(gridSizePreference);
}

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}