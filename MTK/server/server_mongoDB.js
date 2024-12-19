const mongoose = require('mongoose');

// Подключаемся к MongoDB (без использования deprecated параметров)
mongoose.connect('mongodb://localhost:27017/mtk_shop')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
