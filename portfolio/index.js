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