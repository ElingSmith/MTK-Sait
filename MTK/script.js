// JSON

const products = {
    "mtk300": {
        "name": "Фронтальный погрузчик МТК 300",
        "price": "4 800 000 ₽",
        "description": "Надёжная и мощная спецтехника для выполнения задач на стройке и производстве.",
        "image": "images/Вставленное изображение.png"
    },

    "mtk926": {
        "name": "Фронтальный погрузчик МТК 926",
        "price": "5 200 000 ₽",
        "description": "Высокая производительность и долговечность для любых условий.",
        "image": "images/MTK 926 (1).jpeg"
    },
    "mtk930": {
        "name": "Фронтальный погрузчик МТК 930",
        "price": "5 500 000 ₽",
        "description": "Отличное сочетание мощности и экономичности.",
        "image": "images/MTK_930 (6) — копия.jpeg"
    },
    "mtk320": {
        "name": "Фронтальный погрузчик МТК 300",
        "price": "4 800 000 ₽",
        "description": "Надёжная и мощная спецтехника для выполнения задач на стройке и производстве.",
        "image": "images/Вставленное изображение.png"
    },
        "mtk9302": {
        "name": "Фронтальный погрузчик МТК 930",
        "price": "5 500 000 ₽",
        "description": "Отличное сочетание мощности и экономичности.",
        "image": "images/MTK_930 (6) — копия.jpeg"
    },
        "mtk9303": {
        "name": "Фронтальный погрузчик МТК 930",
        "price": "5 500 000 ₽",
        "description": "Отличное сочетание мощности и экономичности.",
        "image": "images/MTK_930 (6) — копия.jpeg"
    },
        "mtk9430": {
        "name": "Фронтальный погрузчик МТК 930",
        "price": "5 500 000 ₽",
        "description": "Отличное сочетание мощности и экономичности.",
        "image": "images/MTK_930 (6) — копия.jpeg"
    },
        "mtk9530": {
        "name": "Фронтальный погрузчик МТК 930",
        "price": "5 50009909 000 ₽",
        "description": "Отличное сочетание мощности и экономичности.",
        "image": "images/MTK_930 (6) — копия.jpeg"
    },


    // остальные товары здесь...
};

// Отображение главных товаров на главной странице
function displayProducts() {
    const productsContainer = document.getElementById('popularTech');

    for (const productId in products) {
        const product = products[productId];

        //  HTML для карточки товара
        const productCard = document.createElement('div');
        productCard.classList.add('tech-item', 'fade-in');
        productCard.setAttribute('data-product-id', productId);

      productCard.innerHTML = `

            
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p>Цена: ${product.price}</p>
            
            

        `;

        // обработчик клика для перехода на страницу товара
        productCard.addEventListener('click', function() {
            window.location.href = `product.html?product=${productId}`;
        });

        // карточка в контейнер
        productsContainer.appendChild(productCard);
    }
}
// Получение параметра товара из URL
function getProductParam() {
    const params = new URLSearchParams(window.location.search);
    return params.get('product');
}

// Функция для отображения информации о товаре на странице деталей
function displayProductDetails() {
    const productParam = getProductParam();
    const product = products[productParam];

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `Цена: ${product.price}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-image').src = product.image;
        document.title = `${product.name} - MTK`;
    } else {
        document.querySelector('.product-details').textContent = 'Товар не найден';
    }
}

// Запуск поиска при вводе текста
document.getElementById("searchInput").addEventListener("input", searchItems);

// Функция поиска товаров
document.getElementById("searchInput").addEventListener("input", searchItems);

function searchItems() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();
    let dropdownContainer = document.getElementById("searchDropdown");

    // Очистка предыдущих результатов
    dropdownContainer.innerHTML = "";
    let foundItems = 0;

    // Если поле поиска пустое, скрываем выпадающее меню
    if (searchQuery === "") {
        dropdownContainer.style.display = "none";
        return;
    }

    // Поиск товаров в массиве `products`
    for (const productId in products) {
        const product = products[productId];
        const itemName = product.name.toLowerCase();

        if (itemName.includes(searchQuery)) {
            foundItems++;

            // Создаём элемент списка для найденного товара
            let listItem = document.createElement("li");
            listItem.classList.add("dropdown-item");
            listItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="dropdown-img">
                <span class="dropdown-name">${product.name}</span><span class="dropdown-price">${product.price}</span>
            `;

            // Переход на страницу товара по клику
            listItem.addEventListener("click", function() {
                window.location.href = `product.html?product=${productId}`;
            });

            // Добавление элемента в контейнер
            dropdownContainer.appendChild(listItem);
        }
    }

    // Если совпадений нет, показываем сообщение
    if (foundItems === 0) {
        let noResultItem = document.createElement("li");
        noResultItem.classList.add("dropdown-item", "no-results");
        noResultItem.textContent = "Совпадений не найдено";
        dropdownContainer.appendChild(noResultItem);
    }

    // Показ выпадающего списка с анимацией
    dropdownContainer.style.display = "block";
}


// Проверка, на какой странице запущен скрипт
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-name')) {
        displayProductDetails();
    } else if (document.getElementById('popularTech')) {
        displayProducts();
    }
});




