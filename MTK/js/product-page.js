document.addEventListener("DOMContentLoaded", () => {
    // Получаем JSON товара из localStorage
    const productJSON = localStorage.getItem("selectedProduct");
    if (!productJSON) {
        console.error("Данные о товаре не найдены!");
        return;
    }

    const product = JSON.parse(productJSON);

    // Заполняем данные на странице
    populateProductPage(product);

    // Добавляем функциональность для карусели
    initializeGallery();

    // Настройка расположения галереи в зависимости от размера экрана
    adjustGalleryLayout();
});

// Функция для корректировки расположения галереи
function adjustGalleryLayout() {
    const gallery = document.getElementById("product-gallery");
    const productImages = document.querySelector('.product-images');
    const mainImageContainer = document.querySelector('.main-image-container');

    // Проверяем ширину экрана
    if (window.innerWidth > 768) {
        // Для экранов больше 768px (ПК) — размещаем галерею слева
        if (gallery !== productImages.firstElementChild) {
            productImages.insertBefore(gallery, mainImageContainer); // Перемещаем галерею в начало
        }
    } else {
        // Для экранов меньше или равных 768px (мобильные устройства) — размещаем галерею снизу
        if (gallery !== productImages.lastElementChild) {
            productImages.appendChild(gallery); // Перемещаем галерею в конец
        }
    }
}

// Вызываем функцию при изменении размера окна
window.addEventListener('resize', adjustGalleryLayout);

const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
};

function populateProductPage(product) {
    // Основное изображение
    const mainImage = document.getElementById("product-main-image");
    mainImage.src = product.image;

    // Галерея изображений
    const gallery = document.getElementById("product-gallery");
    Object.values(product.image_product).forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = "Дополнительное изображение";
        img.dataset.index = index; // Индекс изображения
        img.onclick = () => {
            mainImage.src = image;
            setActiveThumbnail(index); // Устанавливаем активный элемент
        };
        gallery.appendChild(img);
    });

    // Основные данные товара
    document.getElementById("product-title").textContent = product.product_name;
    document.getElementById("product-price").textContent = `${formatPrice(product.price)} ₽`;
    document.getElementById("product-short-description").textContent = product.short_description || "Краткое описание отсутствует";

    // Заголовок с названием техники
    document.title = product.product_name;

    // Характеристики
    const specificationsContainer = document.getElementById("product-specifications-table");
    specificationsContainer.innerHTML = ""; // Очистим контейнер

    for (const [category, specs] of Object.entries(product.characteristics)) {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("spec-category");

        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category;
        categoryTitle.classList.add("category-title");

        // Если это основные характеристики, то разворачиваем сразу
        const isMain = category.toLowerCase().includes("основные");
        const specsList = document.createElement("div");
        specsList.classList.add("spec-list");
        if (!isMain) specsList.style.display = "none";

        // Добавляем обработчик клика на весь div.spec-category
        categoryDiv.addEventListener("click", (e) => {
            if (!e.target.closest(".spec-list")) {
                categoryDiv.classList.toggle("open"); // Переключаем класс для открытия/закрытия
                if (!isMain) {
                    specsList.style.display = specsList.style.display === "none" ? "block" : "none";
                }
            }
        });

        // Заполняем характеристики
        for (const [key, value] of Object.entries(specs)) {
            const specDiv = document.createElement("div");
            specDiv.classList.add("spec-item");
            specDiv.innerHTML = `<span class="spec-key">${key}:</span> <span class="spec-value">${value}</span>`;
            specsList.appendChild(specDiv);
        }

        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(specsList);
        specificationsContainer.appendChild(categoryDiv);
    }
}

function initializeGallery() {
    const gallery = document.getElementById("product-gallery");
    const thumbnails = gallery.querySelectorAll("img");

    // Устанавливаем первую картинку активной
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add("active");
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            setActiveThumbnail(index);
        });
    });
}

function setActiveThumbnail(activeIndex) {
    const gallery = document.getElementById("product-gallery");
    const thumbnails = gallery.querySelectorAll("img");

    // Убираем класс active у всех миниатюр
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));

    // Добавляем класс active выбранной миниатюре
    thumbnails[activeIndex].classList.add("active");

    // Прокручиваем галерею, чтобы выбранная миниатюра была по центру
    const thumbnail = thumbnails[activeIndex];
    const galleryRect = gallery.getBoundingClientRect();
    const thumbnailRect = thumbnail.getBoundingClientRect();
    const offset = thumbnailRect.left - galleryRect.left - (galleryRect.width / 2) + (thumbnailRect.width / 2);

    gallery.scrollBy({
        left: offset,
        behavior: "smooth",
    });
}
