function showSubMenu(subMenuId) {
    // Скрываем главное меню
    document.querySelector("#main-menu").classList.remove("active");

    // Показываем выбранное подменю
    const subMenu = document.querySelector(`#${subMenuId}`);
    subMenu.classList.add("active");
}

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
    menu.classList.toggle('show');
    overlay.style.display = menu.classList.contains('show') ? 'block' : 'none';
}

// Закрытие меню при клике вне его
window.addEventListener('click', function(event) {
    const menu = document.querySelector('.burger-menu-content');
    const burgerButton = document.querySelector('.burger-menu');
    const overlay = document.getElementById('overlay');

    if (!menu.contains(event.target) && !burgerButton.contains(event.target)) {
        menu.classList.remove('show');
        overlay.style.display = 'none';
    }
});
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.overlay').style.display = 'none';
    }
});
