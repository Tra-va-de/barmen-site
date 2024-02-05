// Функция открытия / закрытия навигации на экранах
// небольшого размера
const nav = document.querySelector('.nav');

const openCloseNav = () => {
    nav.classList.toggle('show');
}

// Прослушка изменения размеров экрана
// для удаление класса hide у nav 
window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && nav.classList.contains('show')) {
        nav.classList.remove('show');
    }
});