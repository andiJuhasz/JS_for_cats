/*
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function randomizer() {
    const randomizedBarCells = shuffle(barCells);
    let counter = 0;
    for (barCell of document.querySelectorAll('.option-cell')) {
        barCell.innerHTML = randomizedBarCells[counter];
        counter++;
    }
}
*/


function check(event) {
    const droppedOn = event.target;
    console.log(event.innerHTML);
    imageSequence = [];
    for (cell of document.getElementsByClassName('game-cell')) {
        imageSequence.push(cell.innerHTML)
    }
    console.log(imageSequence);
    if (undefined in imageSequence) {
        alert("I can appear!")
    }
}


function main() {
    const barCells = Array.from(document.querySelectorAll('.option-cell'));
    for (gameCell of Array.from(document.querySelectorAll('.game-cell'))) {
        gameCell.addEventListener('drop', check);
        barCells.push(gameCell);
    }
    const drake = dragula(barCells);
    drake.on('drop', check)
}


main();