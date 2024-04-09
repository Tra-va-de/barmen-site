// Переменные, с которыми предстоит работа
const loader = document.querySelector('#loader');
const loaderVideo = loader.querySelector('.loader__video');
const nav = document.querySelector('.nav');
const welcomeFigure = document.querySelector('.decorations__welcome-figure');
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

// Функция для запуска анимации фигуры в welcome
const welcomeFigureAnimation = () => {
    welcomeFigure.classList.remove('play');
    void welcomeFigure.offsetWidth; // Это нужно для перезапуска анимации
    welcomeFigure.classList.add('play');
}

// Запуск анимации welcome при наведении курсора
welcomeFigure.addEventListener('mouseover', function () {
    welcomeFigureAnimation();
});

welcomeFigure.addEventListener('mouseleave', function () {
    welcomeFigure.classList.remove('play');
});

// Активируем анимацию при загрузке страницы
window.addEventListener('load', () => {
    welcomeFigureAnimation();
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

const swiper = new Swiper('.works__swiper', {
    direction: 'horizontal',
    loop: true,

    // автослайдинг
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    // Кнопки
    navigation: {
        nextEl: '.works__btn-right',
        prevEl: '.works__btn-left',
    },
});


// Активируем loader
window.addEventListener('load', () => {
    loader.classList.add('loader--hide');
    setTimeout(() => {
        loader.remove();
    }, 300);
});


// Отображаем видео при прогрузке
loaderVideo.addEventListener('canplay', () => {
    loaderVideo.classList.remove('loader__video--hide');
})

// Включаем звук при клике на видео
loaderVideo.addEventListener('click', () => {
    loaderVideo.muted = false;
})