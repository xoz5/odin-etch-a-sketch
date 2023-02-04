let gridItemCount = 16;
const gridContainer = document.querySelector('.grid-container');

addDivsToGridContainer(gridItemCount);

function addDivsToGridContainer(gridItemCount) {
    let i = 0;
    let n = 0;
    while(i < gridItemCount) {
        while(n < gridItemCount) {
            let gridItem = document.createElement('div');
            gridContainer.appendChild(gridItem);
            n++;
        } i++;
    }
}