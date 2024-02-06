// Переменные, с которыми предстоит работа
const nav = document.querySelector('.nav');
const aboutDescription = document.querySelector('.about__description');
const presentationFrame = document.querySelector('.presentation__frame');

// Функция открытия / закрытия навигации на экранах
// небольшого размера
const openCloseNav = () => {
    nav.classList.toggle('show');
}

// Прослушка изменения размеров экрана
// для удаление класса hide у nav 
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('show')) {
        nav.classList.remove('show');
    }
});

// Создали обсервер для проверки появления элемента
// в зоне видимости и добавления ему класса show
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

// Передали элемент для проверки
observer.observe(aboutDescription);

// для замены видео широкого формата
// на мобильный
const showMobilePresentation = () => {
    if (window.innerWidth <= 480) {
        presentationFrame.classList.add('mobile');
    } else {
        presentationFrame.classList.remove('mobile');
    }
}

// Прослушка изменения размеров экрана
// для применения описанной выше функции
window.addEventListener('resize', showMobilePresentation);

// Вызов функции при первичной инициализации
showMobilePresentation();