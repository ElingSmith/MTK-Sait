// product-page.js

// Функция для отображения характеристик товара
function displayProductDetails() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!product) {
        console.error("Продукт не найден в localStorage");
        return;
    }

    const productDetailsContainer = document.getElementById("product-details");

    // Наполняем окно характеристиками
    productDetailsContainer.innerHTML = `
        <h1>${product.product_name}</h1>
        <img src="${product.image}" alt="${product.product_name}">
        <p>Цена: ${product.price}₽</p>
        <div class="product-specs">
            <h3>Характеристики:</h3>
            <ul>
                ${Object.keys(product.filtr).map(key => {
                    return `<li><strong>${key}:</strong> ${product.filtr[key]}</li>`;
                }).join('')}
            </ul>
        </div>
        <button class="back-btn">Назад</button>
    `;

    // Добавляем обработчик для кнопки "Назад"
    document.querySelector(".back-btn").addEventListener("click", () => {
        window.history.back(); // Возвращаемся на предыдущую страницу
    });
}

// Загружаем характеристики при загрузке страницы
document.addEventListener("DOMContentLoaded", displayProductDetails);
