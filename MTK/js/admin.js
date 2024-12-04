// Функция для добавления товара через форму
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    // Сохранение данных о товаре в localStorage для доступа с главной страницы
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({ name: productName, price: productPrice, imageUrl: productImage });
    localStorage.setItem('products', JSON.stringify(products));

    alert('Товар успешно добавлен!');
    document.getElementById('productForm').reset();
});
