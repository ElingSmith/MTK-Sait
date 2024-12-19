// Функция получения параметров из URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const subcategory = params.get("subcat");
    const subsubcategory = params.get("subsubcat");  // Добавляем поддержку субкатегории

    return {category, subcategory, subsubcategory};
}

// Функция загрузки товаров
function loadProducts() {
    const {category, subcategory, subsubcategory} = getUrlParams(); // получаем параметры из URL

    if (!category) {
        console.error("Не найдена категория.");
        return;
    }

    const productList = document.getElementById("product-list");
    const basePath = `http://localhost:8000/products`; // Базовый путь к API с товарами

    // Формирование пути запроса с учетом всех параметров
    let url = `${basePath}/${category}`;  // Начинаем с категории
    if (subcategory) {
        url += `/${subcategory}`;  // Если есть подкатегория, добавляем
    }
    if (subsubcategory) {
        url += `/${subsubcategory}`;  // Если есть субкатегория, добавляем
    }

    console.log("Загрузка товаров с сервера: " + url);

    // Делает запрос на сервер
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Не удалось загрузить товары");
            }
            return response.json();
        })
        .then(products => {
            // Отображаем товары
            displayProducts(products);
        })
        .catch(error => {
            console.error("Ошибка загрузки товаров:", error);
        });
}

const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
};

// Функция отображения товаров
function displayProducts(products) {
    const productList = document.getElementById("product-list");

    // Перебираем товары и создаем их карточки
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("tech-item", "fade-in");

        // Преобразуем product_name в безопасный для URL формат
        const productUrlName = product.product_name.replace(/\s+/g, '-').toLowerCase();

        // Наполняем карточку товара
        productCard.innerHTML = `
            <img src="" data-src="${product.image}" alt="${product.product_name}" class="lazy">
            <p class="product-name">${product.product_name}</p>
            <p class="product-price">${formatPrice(product.price)}₽</p>
            <button class="view-details-btn">Подробнее</button>
        `;

        // Добавляем обработчик для всего div
        productCard.addEventListener("click", function () {
            // Сохраняем товар в localStorage или передаем параметры через URL
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = `product-page.html?name=${productUrlName}`;
        });

        // Добавляем карточку товара в контейнер
        productList.appendChild(productCard);
    });

    // Активация lazy loading для изображений
    activateLazyLoading();
}

// Функция активации lazy loading
function activateLazyLoading() {
    const lazyImages = document.querySelectorAll("img.lazy");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
}

// Загружаем товары при загрузке страницы
document.addEventListener("DOMContentLoaded", loadProducts);
