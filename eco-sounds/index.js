let isPlay = false

// change img
const solButton = document.querySelector('#sol');
const drButton = document.querySelector('#dr');
const malButton = document.querySelector('#mal');
const zhavButton = document.querySelector('#zhav');
const slavButton = document.querySelector('#slav');
let Img = document.querySelector('.photos');
const navItemM = document.querySelectorAll('.nav-item');
const button = document.querySelector('.play');
const logoButton = document.querySelector('.logo')
function myClickSol (){
  Img.classList.remove('bg-sol');
  Img.classList.remove('bg-dr');
  Img.classList.remove('bg-mal');
  Img.classList.remove('bg-zhav');
  Img.classList.remove('bg-slav');
  Img.classList.add('bg-sol');
}
/*solButton.addEventListener('click',  myClickSol )*/

function myClickDr (){
  Img.classList.remove('bg-sol');
  Img.classList.remove('bg-dr');
  Img.classList.remove('bg-mal');
  Img.classList.remove('bg-zhav');
  Img.classList.remove('bg-slav');
  Img.classList.add('bg-dr');
}
/*drButton.addEventListener('click',  myClickDr);*/

function myClickMal (){
  Img.classList.remove('bg-sol');
  Img.classList.remove('bg-dr');
  Img.classList.remove('bg-mal');
  Img.classList.remove('bg-zhav');
  Img.classList.remove('bg-slav');
  Img.classList.add('bg-mal');
}
/*malButton.addEventListener('click',  myClickMal);*/

function myClickZhav (){
  Img.classList.remove('bg-sol');
  Img.classList.remove('bg-dr');
  Img.classList.remove('bg-mal');
  Img.classList.remove('bg-zhav');
  Img.classList.remove('bg-slav');
  Img.classList.add('bg-zhav');
}
/*zhavButton.addEventListener('click',  myClickZhav);*/

function myClickSlav (){
  Img.classList.remove('bg-sol');
  Img.classList.remove('bg-dr');
  Img.classList.remove('bg-mal');
  Img.classList.remove('bg-zhav');
  Img.classList.remove('bg-slav');
  Img.classList.add('bg-slav');
}
/*slavButton.addEventListener('click',  myClickSlav);*/

function myClickLogoButton (){
  Img.classList.remove('bg-sol');
  Img.classList.remove('bg-dr');
  Img.classList.remove('bg-mal');
  Img.classList.remove('bg-zhav');
  Img.classList.remove('bg-slav');
  Img.classList.add('bg-forest');
}
/*logoButton.addEventListener('click', myClickLogoButton);*/

//audio
const audio = new Audio();

function playAudioLogoButton() {
  audio.src = "./assets/audio/forest.mp3"
  audio.currentTime = 0;
  audio.play();
  changePlayPause(); 
  isPlay = true;
}
logoButton.addEventListener('click', () => playAudioLogoButton() )



function playAudioSol() {
  audio.src = "./assets/audio/solovey.mp3"
  audio.currentTime = 0;
  audio.play();
  myClickSol()
  changePlayPause(); 
}
solButton.addEventListener('click', () => playAudioSol() )

function playAudioDr() {
    audio.src = "./assets/audio/drozd.mp3"
    audio.currentTime = 0;
    audio.play();
    myClickDr();
    changePlayPause(); 
  }
  drButton.addEventListener('click', () => playAudioDr() )
  
  function playAudioMal() {
    audio.src = "./assets/audio/zarynka.mp3"
    audio.currentTime = 0;
    audio.play();
    myClickMal();
    changePlayPause(); 
  }
  malButton.addEventListener('click', () => playAudioMal() )
  
  function playAudioZhav() {
    audio.src = "./assets/audio/javoronok.mp3"
    audio.currentTime = 0;
    audio.play();
    myClickZhav();
    changePlayPause(); 
  }
  zhavButton.addEventListener('click', () => playAudioZhav() )
  
  function playAudioSlav() {
    audio.src = "./assets/audio/slavka.mp3"
    audio.currentTime = 0;
    audio.play();
    myClickSlav();
    changePlayPause(); 
  }
  slavButton.addEventListener('click', () => playAudioSlav() )

  function playAudioLogo() {
    audio.src = "./assets/audio/forest.mp3"
    audio.currentTime = 0;
    audio.play();
    myClickLogoButton();
    changePlayPause(); 
  }
  logoButton.addEventListener('click', () => playAudioLogo() )
  
function pauseAudio() {
    audio.pause();
    isPlay = false;
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
    logoButton.classList.remove('active')
    event.target.classList.add('active');
}
navItem.forEach(el => {el.addEventListener('click',changeColorButton )});

function changeColorLogoButton (event) {
  navItem.forEach((el) => {el.classList.remove('active')});
  event.target.classList.add('active');
}
logoButton.addEventListener('click',changeColorLogoButton );