const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Настройка Express
const app = express();
const port = 8000;

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/spetstekhnika_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Подключено к базе данных'))
  .catch((err) => console.log('Ошибка подключения к базе данных:', err));

// Модель товара (Product)
const productSchema = new mongoose.Schema({
  category: String,
  subcategory: String,
  subsubcategory: String,
  product_name: String,
  price: Number,
  image: String,
  characteristics: Object,
  image_product: Object,
  filtr: Object,
});

const Product = mongoose.model('products', productSchema);

// Разрешение CORS
app.use(cors());

// Логирование всех запросов
app.use((req, res, next) => {
  console.log(`Запрос к пути: ${req.url}`);
  next(); // Передаем управление следующему обработчику
});

// Маршрут для получения товаров по категории, подкатегории или субкатегории
app.get('/products/:category/:subcategory?/:subsubcategory?', async (req, res) => {
  const { category, subcategory, subsubcategory } = req.params;

  let query = {};

  if (category) {
    query.category = category;
  }

  if (subcategory) {
    query.subcategory = subcategory;
  }

  if (subsubcategory) {
    query.subsubcategory = subsubcategory;
  }

  try {
    const products = await Product.find(query);  // Поиск товаров по фильтру
    res.json(products);  // Отправка данных в формате JSON
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении данных' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});
