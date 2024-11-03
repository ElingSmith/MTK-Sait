document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const subcategory = urlParams.get('subcat');

    loadProducts(category, subcategory);
});

function loadProducts(category, subcategory) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Очищаем список товаров

    const folderPath = `data/${category}/${subcategory}/`; // Путь к подкатегории с JSON-файлами

    // Используем fetch для получения списка JSON-файлов в папке
    fetch(`${folderPath}`)
        .then(response => response.text())
        .then(text => {
            const files = text.match(/"([^"]+\.json)"/g).map(file => file.replace(/"/g, '')); // Извлечение имен файлов из списка
            return Promise.all(files.map(file => fetch(`${folderPath}${file}`)));
        })
        .then(responses => {
            return Promise.all(responses.map(res => res.json()));
        })
        .then(products => {
            products.forEach(product => {
                const productItem = document.createElement("div");
                productItem.classList.add("product-item");
                productItem.innerHTML = `
                    <h2>${product.product_name}</h2>
                    <img src="${product.images[0]}" alt="${product.product_name}">
                    <p>Цена: ${product.price} руб.</p>
                `;
                productList.appendChild(productItem);
            });
        })
        .catch(error => {
            console.error("Ошибка загрузки товаров:", error);
        });
}
