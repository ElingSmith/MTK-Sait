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
});

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
    document.getElementById("product-price").textContent = `${product.price} ₽`;
    document.getElementById("product-short-description").textContent = product.short_description || "Краткое описание отсутствует";

    // Характеристики
    const specificationsTable = document.getElementById("product-specifications-table");
    for (const [category, specs] of Object.entries(product.characteristics)) {
        const categoryRow = document.createElement("tr");
        categoryRow.innerHTML = `<td colspan="2"><strong>${category}</strong></td>`;
        specificationsTable.appendChild(categoryRow);

        for (const [key, value] of Object.entries(specs)) {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${key}</td><td>${value}</td>`;
            specificationsTable.appendChild(row);
        }
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

    function setActiveThumbnail(activeIndex) {
        // Убираем класс active у всех миниатюр
        thumbnails.forEach((thumb) => thumb.classList.remove("active"));

        // Добавляем класс active выбранной миниатюре
        thumbnails[activeIndex].classList.add("active");

        // Прокручиваем карусель, чтобы выбранная миниатюра была по центру
        const thumbnail = thumbnails[activeIndex];
        const galleryRect = gallery.getBoundingClientRect();
        const thumbnailRect = thumbnail.getBoundingClientRect();
        const offset = thumbnailRect.left - galleryRect.left - (galleryRect.width / 2) + (thumbnailRect.width / 2);

        gallery.scrollBy({
            left: offset,
            behavior: "smooth",
        });
    }
}

