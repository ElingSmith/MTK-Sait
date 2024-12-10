// preloader.js

// Ждём полной загрузки страницы
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader"); // Ищем элемент прелоадера

    if (preloader) {
        // Добавляем анимацию исчезновения
        preloader.style.opacity = "0"; // Убираем прозрачность
        preloader.style.transition = "opacity 0.5s ease"; // Анимация исчезновения

        // Удаляем прелоадер из DOM после завершения анимации
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500); // Задержка соответствует времени анимации
    }
});