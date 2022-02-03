let playlist = [

]

// change img
const solButton = document.querySelector('#sol');
const drButton = document.querySelector('#dr');
const malButton = document.querySelector('#mal');
const zhavButton = document.querySelector('#zhav');
const slavButton = document.querySelector('#slav');
const solImg = document.querySelector('.photos');

solButton.addEventListener('click', () => {
    solImg.src = "./assets/img/solovey.jpg"
});

//audio
const audio = new Audio();
let button = document.querySelector('.play');
let isPlay = false;



function playAudioSol() {
  audio.src = "./assets/audio/solovey.mp3"
  audio.currentTime = 0;
  audio.play();
  changePlayPause(); 
}
solButton.addEventListener('click', () => playAudioSol() )

function playAudioDr() {
    audio.src = "./assets/audio/drozd.mp3"
    audio.currentTime = 0;
    audio.play();
    changePlayPause(); 
  }
  drButton.addEventListener('click', () => playAudioDr() )
  
  function playAudioMal() {
    audio.src = "./assets/audio/zarynka.mp3"
    audio.currentTime = 0;
    audio.play();
    changePlayPause(); 
  }
  malButton.addEventListener('click', () => playAudioMal() )
  
  function playAudioZhav() {
    audio.src = "./assets/audio/javoronok.mp3"
    audio.currentTime = 0;
    audio.play();
    changePlayPause(); 
  }
  zhavButton.addEventListener('click', () => playAudioZhav() )
  
  function playAudioSlav() {
    audio.src = "./assets/audio/slavka.mp3"
    audio.currentTime = 0;
    audio.play();
    changePlayPause(); 
  }
  slavButton.addEventListener('click', () => playAudioSlav() )
  
function pauseAudio() {
    audio.pause();
    changePausePlay();
  }
  button.addEventListener('çlick', () => pauseAudio())
// change playbut 
function changePlayPause() {
button.classList.add('pause');
}
button.addEventListener('click',changePlayPause );

function changePausePlay() {
    button.classList.remove('pause');
}
button.addEventListener('click',changePausePlay);
  //change color button
const navItem = document.querySelectorAll('.nav-item');
function changeColorButton (event) {
    navItem.forEach((el) => {el.classList.remove('active')});
    event.target.classList.add('active');
}
navItem.forEach(el => {el.addEventListener('click',changeColorButton )});

