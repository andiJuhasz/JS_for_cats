
const gameCells = [].slice.call(document.getElementsByClassName('game-cell'));
console.log(gameCells);
dragula(gameCells);

const barCells = [].slice.call(document.getElementsByClassName('option-cell'));
dragula(barCells);


