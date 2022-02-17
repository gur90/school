let cells = document.querySelectorAll('.td');
let text = document.querySelectorAll('.text');
let players = ['X', 'O'];
let button = document.querySelector('.button');
let field = document.querySelector('.field')
function audioPlay () {
let audio = new Audio;
audio.src = './assets/audio/1.mp4';
audio.autoplay = true;
}
addEventListener('click', audioPlay)
startPlay(cells);

function startPlay(cells) {
    let i = 0
    for (let cell of cells) {
        cell.addEventListener('click', function letsGo() {
            if(i % 2 == 0) {
                this.innerHTML = "X";
            } else {
                this.innerHTML = "O";
            }
            this.removeEventListener('click', letsGo)
            if (victory(cells)) {
                alert('Победитель: ' + this.innerHTML)
            } else if (i == 8) {
                alert ('Победила дружба!');
            }
          i++;
        });
    }
}

function victory(cells) {
    let combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let combination of combinations) {
        if ( cells[combination[0]].innerHTML == cells[combination[1]].innerHTML
             &&
             cells[combination[1]].innerHTML == cells[combination[2]].innerHTML
             &&
             cells[combination[0]].innerHTML != '') {
                 return true;
             }
    }
    return false
} 

function reStart () {
  
}
button.addEventListener('click', () => reStart )