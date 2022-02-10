const objText = {
   
}
const text = document.querySelector('.text');
const author = document.querySelector('.author');
const button = document.querySelector('.button');
async function getQuotes() {
    const url = 'data.json';
    const res = await fetch(url);
    const data = await res.json();
    
    const randomNum = Math.floor(Math.random()*data.length);
    const tex = data[randomNum].text;
    const auth = data[randomNum].author;
    text.innerHTML=tex;
    author.innerHTML=auth;
  }
  getQuotes();
  button.addEventListener('click', getQuotes);

  var i = 0;
  var imgs = new Array('./assets/img/1.jpg', './assets/img/2.jpg', './assets/img/3.jpg','./assets/img/4.jpg','./assets/img/5.jpg','./assets/img/6.jpg','./assets/img/7.jpg', './assets/img/8.jpg',)
  
  function changeImg() {
      var image = document.querySelector('.img');
      image.src=imgs[i];
      i++;
      if(i>=imgs.length) {
          i=0
      }

  }
  button.addEventListener('click',() => changeImg())