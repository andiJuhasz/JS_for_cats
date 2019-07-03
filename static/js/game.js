const barCells = Array.from(document.querySelectorAll('.option-cell'));
for (gameCell of Array.from(document.querySelectorAll('.game-cell'))) {
    barCells.push(gameCell);
}
console.log(barCells);
dragula(barCells);
