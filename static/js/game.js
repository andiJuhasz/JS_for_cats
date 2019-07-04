function check() {
    imageSequence = [];
    for (cell of document.getElementsByClassName('game-cell')) {
        imageSequence.push(cell.innerHTML)
    }
    const check_list = [
        '<img class="image" src="/static/images/van/Capture1.JPG">',
        '<img class="image" src="/static/images/van/Capture2.JPG">',
        '<img class="image" src="/static/images/van/Capture3.JPG">',
        '<img class="image" src="/static/images/van/Capture4.JPG">',
        '<img class="image" src="/static/images/van/Capture5.JPG">',
        '<img class="image" src="/static/images/van/Capture6.JPG">',
        '<img class="image" src="/static/images/van/Capture7.JPG">',
        '<img class="image" src="/static/images/van/Capture8.JPG">',
        '<img class="image gu-transit" src="/static/images/van/Capture9.JPG">',

    ];

    let checkCount = 0;
    for (let i = 0; i < check_list.length; i++) {
        if (check_list[i] === imageSequence[i]) {
            checkCount++
        }
    }
    if (checkCount === check_list.length) {
        alert('Szia Andi:)')
    }
}


function main() {
    const barCells = Array.from(document.querySelectorAll('.option-cell'));
    for (gameCell of Array.from(document.querySelectorAll('.game-cell'))) {
        barCells.push(gameCell);
    }
    const drake = dragula(barCells);
    drake.on('drop', check)
}


main();
