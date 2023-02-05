let gridItemCount = 16;
const gridContainer = document.querySelector('.grid-container');

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