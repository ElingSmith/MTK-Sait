// Получаем кнопку и блок с категориями
const menuToggle = document.querySelector('.menu-toggle');
const categoriesSidebar = document.querySelector('.categories-sidebar');

// Обработчик клика по кнопке меню
menuToggle.addEventListener('click', function() {
    categoriesSidebar.classList.toggle('open'); // Переключение класса open для показа/скрытия меню
});
