function check() {
    imageSequence = [];
    for (cell of document.getElementsByClassName('game-cell')) {
        imageSequence.push(cell.innerHTML)
    }
    const imageName = document.getElementById('game-board').dataset.imageName;
    let checkList = [];
    if (imageName === 'van') {
        checkList = [
            '<img class="image" src="/static/images/van/Capture1.JPG">',
            '<img class="image" src="/static/images/van/Capture2.JPG">',
            '<img class="image" src="/static/images/van/Capture3.JPG">',
            '<img class="image" src="/static/images/van/Capture4.JPG">',
            '<img class="image" src="/static/images/van/Capture5.JPG">',
            '<img class="image" src="/static/images/van/Capture6.JPG">',
            '<img class="image" src="/static/images/van/Capture7.JPG">',
            '<img class="image" src="/static/images/van/Capture8.JPG">',
            '<img class="image" src="/static/images/van/Capture9.JPG">',
        ];
    }
    else if (imageName === 'motor') {
        checkList = [
            '<img class="image" src="/static/images/motor/image_part_001.png">',
            '<img class="image" src="/static/images/motor/image_part_002.png">',
            '<img class="image" src="/static/images/motor/image_part_003.png">',
            '<img class="image" src="/static/images/motor/image_part_004.png">',
            '<img class="image" src="/static/images/motor/image_part_005.png">',
            '<img class="image" src="/static/images/motor/image_part_006.png">',
            '<img class="image" src="/static/images/motor/image_part_007.png">',
            '<img class="image" src="/static/images/motor/image_part_008.png">',
            '<img class="image" src="/static/images/motor/image_part_009.png">',
            '<img class="image" src="/static/images/motor/image_part_010.png">',
            '<img class="image" src="/static/images/motor/image_part_011.png">',
            '<img class="image" src="/static/images/motor/image_part_012.png">',
            '<img class="image" src="/static/images/motor/image_part_013.png">',
            '<img class="image" src="/static/images/motor/image_part_014.png">',
            '<img class="image" src="/static/images/motor/image_part_015.png">',
            '<img class="image" src="/static/images/motor/image_part_016.png">',
        ]
    }


    let checkCount = 0;
    for (let i = 0; i <= checkList.length; i++) {
        if (checkList[i] === imageSequence[i]) {
            checkCount++
        }
        if (checkCount === checkList.length) {
            document.getElementById('win').innerHTML = 'Congratulations!'
        }
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
