const objText = {
   'en': {
    'speak': 'Lets talk?'
   },
   'ru': {
       'speak': 'Поговорим о жизни?'
   }
}
console.log("Ваша отметка - 70 балла(ов)");
const text = document.querySelector('.text');
const author = document.querySelector('.author');
const button = document.querySelector('.button');
var data = {};
async function getQuotes(url) {
    const res = await fetch(url);
    data = await res.json();
    changeQuote ()
  }
  getQuotes("data.json");

  button.addEventListener('click', changeQuote);
    function changeQuote () {
    const randomNum = Math.floor(Math.random()*data.length);
    const tex = data[randomNum].text;
    const auth = data[randomNum].author;
    text.innerHTML=tex;
    author.innerHTML=auth;
}

  var i = 0;
  var imgs = new Array('./assets/img/1.jpg', './assets/img/2.jpg', './assets/img/3.jpg','./assets/img/4.jpg','./assets/img/5.jpg','./assets/img/6.jpg','./assets/img/7.jpg', './assets/img/8.jpg',)
  
  function changeImg() {
      var image = document.querySelector('.img');
      i++;
      if(i>=imgs.length) {
          i=0
      }
      image.src=imgs[i];

  }
  button.addEventListener('click',() => changeImg())

elementButtonEn = document.querySelector('.en')
function getTranslate(language) {
   var lang = document.querySelectorAll('[data-i18]');
  
    lang.forEach((el) => {
        
        el.textContent = objText[language][el.dataset.i18];
    });
    if (language == 'ru') {
        getQuotes("data.json")
    } if (language == 'en') {
        getQuotes("dataEn.json")
    }
}
elementButtonEn.addEventListener("click", ( ) => { getTranslate('en')})

elementButtonRu = document.querySelector('.ru')

elementButtonRu.addEventListener("click", ( ) => { getTranslate('ru')});

const ruButton = document.querySelectorAll('.ru');
const enButton = document.querySelectorAll('.en');
function changeRuLng(event) {
    ruButton.forEach(el => {el.classList.remove('active')});
    enButton.forEach(el => {el.classList.remove('active')});
event.target.classList.add('active');

  
}
ruButton.forEach(el => {el.addEventListener('click', changeRuLng)});


function changeEnLng(event) {
    enButton.forEach(el => {el.classList.remove('active')});
    ruButton.forEach(el => {el.classList.remove('active')});
event.target.classList.add('active');

  
}
enButton.forEach(el => {el.addEventListener('click', changeEnLng)});
