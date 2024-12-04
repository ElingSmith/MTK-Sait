const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const productsFolder = path.join(__dirname, 'products');  // Папка с товарами

// Разрешаем CORS (для работы с клиентом, например, на локальном сервере)
app.use(cors());

// Статическая отдача файлов из папки products
app.use('/products', express.static(productsFolder));

// Эндпоинт для получения списка товаров
app.get('/products/:category/:subcategory', (req, res) => {
    const { category, subcategory } = req.params;
    const categoryPath = path.join(productsFolder, category, subcategory);

    // Проверяем, существует ли папка с товарами
    fs.readdir(categoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Не удалось найти товары' });
        }

        // Фильтруем файлы, оставляя только JSON
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        res.json(jsonFiles);  // Отправляем список файлов
    });
});

app.listen(8000, () => {
    console.log('Server is running on http://127.0.0.1:8000');
});
