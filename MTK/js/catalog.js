// Глобальный кэш для товаров
let productCache = {};

// Функция получения параметров из URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const subcategory = params.get("subcat");

    return { category, subcategory };
}

// Функция загрузки товаров
function loadProducts() {

    const { category, subcategory } = getUrlParams();

    if (!category || !subcategory) {
        console.error("Не найдены параметры категории или подкатегории.");
        return;
    }

    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Очищаем список товаров

    const folderPath = `http://localhost:8000/products/${category}/${subcategory}`; // Путь к папке с товарами

    // Проверим кэш
    const cacheKey = `${category}-${subcategory}`;
    if (productCache[cacheKey]) {
        console.log("Загрузка товаров из кэша...");
        displayProducts(productCache[cacheKey]);
        return;
    }

    // Загрузка JSON файлов
    console.log("Загрузка товаров из: " + folderPath);
    fetch(folderPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Не удалось загрузить файлы товаров");
            }
            return response.json();
        })
        .then(files => {
            const promises = files.map(file => fetch(`${folderPath}/${file}`));
            return Promise.all(promises);
        })
        .then(responses => {
            return Promise.all(responses.map(res => res.json())); // Получаем данные о каждом товаре
        })
        .then(products => {
            // Сохраняем товары в кэш
            productCache[cacheKey] = products;

            // Отображаем товары и фильтры
            displayProducts(products);
            generateFilters(products);
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
    productList.innerHTML = ""; // Очищаем старые товары

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
