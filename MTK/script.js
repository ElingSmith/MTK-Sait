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
    }

    // остальные товары здесь...
};

// Отображение всех товаров на главной странице
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

// Функция поиска товаров
function searchItems() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();
    let allItems = document.querySelectorAll(".tech-item");
    let resultMessage = document.getElementById("searchResultMessage");

     // Проверка, если строка поиска пустая
    if (searchQuery === "") {
        return;
    }

    let foundItems = 0;

    allItems.forEach(item => {
        let itemName = item.querySelector("h3").innerText.toLowerCase();
        if (itemName.includes(searchQuery)) {
            item.style.display = "block";
            foundItems++;
        } else {
            item.style.display = "none";
        }
    });

    resultMessage.textContent = foundItems ? `Найдено товаров: ${foundItems}` : "Товар не найден.";
}

// Проверка, на какой странице запущен скрипт
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-name')) {
        displayProductDetails();
    } else if (document.getElementById('popularTech')) {
        displayProducts();
    }
});
