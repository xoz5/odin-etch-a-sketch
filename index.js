let gridItemCount = 16;
const gridContainer = document.querySelector('.grid-container');
addDivsToGridContainer(gridItemCount);

function addDivsToGridContainer(gridItemCount) {
    for (let i = 0; i < gridItemCount; i++) {
        for (let n = 0; n < gridItemCount; n++) {
            let gridItem = document.createElement('div');
            gridContainer.appendChild(gridItem);
        }
    }
}