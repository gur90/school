console.log("1.Вёрстка валидная  +10 \n 2. Вёрстка семантическая +20 \n 3. Вёрстка соответствует макету  но есть отклонения по пикселям, особенно в части footer +42 \n 4. Требования к css + 12 \n 5. Интерактивность, реализуемая через css +20 \n Итого: 104 баллa")

const hamburger = document.querySelector('.hamburger');

const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelector('.nav-item');


if (hamburger) {
    function toggleMenu() {
        document.body.classList.toggle('lock');
        hamburger.classList.toggle('open');
        nav.classList.toggle('active');
        navList.classList.toggle('active');
        navItem.classList.toggle('active');
    }
}
hamburger.addEventListener('click', toggleMenu);

if (hamburger.classList.contains ('active')) {
    function closeMenu() {
        document.body.classList.remove('lock');
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        navList.classList.remove('active');
        navItem.classList.remove('active');
    }
};
navItem.forEach(el => el.addEventListener('click', closeMenu));
