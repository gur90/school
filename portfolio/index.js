console.log("часть 1. \n 1.Вёрстка валидная  +10 \n 2. Вёрстка семантическая +20 \n 3. Вёрстка соответствует макету  но есть отклонения по пикселям, особенно в части footer +42 \n 4. Требования к css + 12 \n 5. Интерактивность, реализуемая через css +20 \n Итого: 104 баллa") 
console.log("часть 2 \n Ваша отметка - 67 балла(ов) \n Отзыв по пунктам ТЗ: \n Частично выполненные пункты: \n 1) блок header — 3 балл(а) \n 2) секция hero — 3 балл(а) \n 3) секция skills — 3 балл(а) \n 4) секция portfolio — 3 балл(а) \n 5) секция price — 3 балл(а) \n 6) блок footer — 3 балл(а) \n Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.");



const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navItem = document.querySelector('.nav-item');
function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('active');
  navItem.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu() {
     
        hamburger.classList.remove('open');
        nav.classList.remove('active');
        navItem.classList.remove('active');
       
    }
  
  nav.addEventListener('click', closeMenu);
//portfolio//

/*const portfolioBtn = document.querySelector('.btn');
const portfolioImage = document.querySelector('.photo');

portfolioBtn.addEventListener('click', () => {
   portfolioImage.src = "./assets/img/spring/1.jpg"
});
*/



  const springBtn = document.querySelector('#spring');
  const springImage = document.querySelectorAll('.photo');
 
 function changeSpringImage() {
             springImage.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
        }
        springBtn.addEventListener('click', changeSpringImage);

    const summerBtn = document.querySelector('#summer');
        const summerImage = document.querySelectorAll('.photo');
       
       function changeSummerImage() {
                   summerImage.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
              }
              summerBtn.addEventListener('click', changeSummerImage);
    
              const winterBtn = document.querySelector('#winter');
              const winterImage = document.querySelectorAll('.photo');
             
             function changeWinterImage() {
                        winterImage.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
                    }
                    winterBtn.addEventListener('click', changeWinterImage);
            const autumnBtn = document.querySelector('#autumn');
                    const autumnImage = document.querySelectorAll('.photo');
                   
                   function changeAutumnImage() {
                              autumnImage.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
                          }
                          autumnBtn.addEventListener('click', changeAutumnImage);
  
  
  
                    //cash//
  /*function preloadSpringImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/spring/${i}.jpg`;
    }
  }
  preloadSpringImages();

  const seasons = ['winter', 'spring', 'summer', 'autumn'];*/



  //but-active//



const portfolioBtns = document.querySelectorAll('.btn');
const portfolioSeasons = document.querySelectorAll('.season');





function changeClassActive(event) {
    portfolioBtns.forEach(el => {el.classList.remove('active')});
    portfolioSeasons.forEach(el => {el.classList.remove('active')});
event.target.classList.add('active');

  
}
portfolioBtns.forEach(el => {el.addEventListener('click', changeClassActive)});
    

   

  
  

  
//translate//
/*const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }
  export default i18Obj;*/