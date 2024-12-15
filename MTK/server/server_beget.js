const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 8000;

// Разрешаем только ваш фронтенд доступ к API
app.use(cors({
  origin: 'http://fulmarub.beget.tech/', // Замените на ваш домен
}));

// Обработка запроса на получение JSON данных
app.get('/api/products/:category/:subcategory', (req, res) => {
  const { category, subcategory } = req.params;
  const filePath = path.join(__dirname, 'data', category, `${subcategory}.json`);

  // Проверяем, существует ли файл
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Отправляем данные JSON
    res.json(JSON.parse(data));
  });
});

// Статические файлы (для фронтенда)
app.use(express.static(path.join(__dirname, '../public')));

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
