let allProducts = []; // Глобальный массив для всех товаров

// Функция загрузки всех товаров
function loadAllProducts() {
    const folderPath = `http://127.0.0.1:8000/products/`; // Путь к папке с товарами

    // Загрузка всех файлов в папке
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
            // Объединяем все товары в один массив
            allProducts = [].concat(...products); // Используем spread-оператор для объединения массивов
            console.log("Все товары загружены:", allProducts);
        })
        .catch(error => {
            console.error("Ошибка загрузки товаров:", error);
        });
}

// Загружаем все товары при загрузке страницы
document.addEventListener("DOMContentLoaded", loadAllProducts);

// Функция поиска товаров
// Функция поиска товаров по product_name
function searchItems() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const dropdownContainer = document.getElementById("searchDropdown");
    dropdownContainer.innerHTML = "";
    let foundItems = 0;

    if (searchQuery === "") {
        dropdownContainer.style.display = "none";
        return;
    }

    // Перебираем все товары из глобального массива allProducts
    allProducts.forEach(product => {
        const itemName = product.product_name.toLowerCase(); // Искать по product_name

        if (itemName.includes(searchQuery)) {
            foundItems++;

            const listItem = document.createElement("li");
            listItem.classList.add("dropdown-item");
            listItem.innerHTML = `
                <img src="${product.image}" alt="${product.product_name}" class="dropdown-img">
                <span class="dropdown-name">${product.product_name}</span>
                <span class="dropdown-price">${product.price}</span>
            `;

            listItem.addEventListener("click", function() {
                window.location.href = `product-page.html?name=${encodeURIComponent(product.product_name.toLowerCase().replace(/\s+/g, '-'))}`;
            });

            dropdownContainer.appendChild(listItem);
        }
    });

    if (foundItems === 0) {
        const noResultItem = document.createElement("li");
        noResultItem.classList.add("dropdown-item", "no-results");
        noResultItem.textContent = "Совпадений не найдено";
        dropdownContainer.appendChild(noResultItem);
    }

    dropdownContainer.style.display = "block";
}

