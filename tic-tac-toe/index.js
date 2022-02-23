console.log("Ваша отметка - 55 балла(ов) \n Не выполненные/не засчитанные пункты: \n 1) Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр \n Частично выполненные пункты: \n 1) По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения — 5 балл(а) \n Все оставшиеся пункты выполнены и не имеют комментариев проверяющего");
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
field.addEventListener('click', audioPlay)
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
                let message1=localStorage.getItem('player');
                let message2=localStorage.getItem('count')
                alert('Победитель: ' + message1 + " ; "+ "количество ходов: " + message2);
            } else if (i == 8) {
                alert ('Победила дружба!');
            }
          i++;
        });
    }
    localStorage.setItem('count', 0)
  
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
                 localStorage.setItem('player',  cells[combination[0]].innerHTML);
                 return true;
             }
    }
    return false
} 

function reStart () {
  for(i=0; i<cells.length; i++) {
      cells[i].innerHTML = "";
  }
  startPlay(cells);
}
button.addEventListener('click',  reStart)


//счетчик кликов

 function countClick() {
     let result=localStorage.getItem('count');
     result++;
     localStorage.setItem('count', result);
}
field.addEventListener('click', countClick)


