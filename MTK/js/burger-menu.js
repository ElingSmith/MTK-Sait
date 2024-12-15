// Показ подменю
function showSubMenu(subMenuId) {
    // Скрываем главное меню
    document.querySelector("#main-menu").classList.remove("active");

    // Показываем выбранное подменю
    const subMenu = document.querySelector(`#${subMenuId}`);
    subMenu.classList.add("active");
}

// Возврат к главному меню
function backToMenu(mainMenuId) {
    // Скрываем все подменю
    document.querySelectorAll(".menu-level").forEach(menu => {
        menu.classList.remove("active");
    });

    // Показываем главное меню
    document.querySelector(`#${mainMenuId}`).classList.add("active");
}

// Открытие и закрытие бургер-меню
function toggleMenu() {
    const menu = document.querySelector('.burger-menu-content');
    const overlay = document.getElementById('overlay');
    const burgerButton = document.querySelector('.burger-menu');

    // Переключение состояния меню
    menu.classList.toggle('show');
    overlay.style.display = menu.classList.contains('show') ? 'block' : 'none';

    // Переключение анимации иконки бургер-меню
    burgerButton.classList.toggle('active');
}

// Закрытие меню при клике вне его
window.addEventListener('click', function(event) {
    const menu = document.querySelector('.burger-menu-content');
    const burgerButton = document.querySelector('.burger-menu');
    const overlay = document.getElementById('overlay');

    // Закрываем меню, если клик был вне него и кнопки
    if (!menu.contains(event.target) && !burgerButton.contains(event.target)) {
        menu.classList.remove('show');
        overlay.style.display = 'none';
        burgerButton.classList.remove('active'); // Убираем класс active
    }
});

// Скрытие overlay при изменении размера окна
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const overlay = document.getElementById('overlay');
        const burgerButton = document.querySelector('.burger-menu');
        overlay.style.display = 'none';
        burgerButton.classList.remove('active'); // Убираем класс active
    }
});
