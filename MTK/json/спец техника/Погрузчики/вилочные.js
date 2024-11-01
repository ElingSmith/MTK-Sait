product = {
  "brands": [
    {
      "make": "Redstar", // Марка производителя техники
      "equipment_types": [
        {
          "type": "Вилочный погрузчик", // Тип техники
          "models": [
            {
              "model": "DK05", // Модель техники
              "price": 2500000, // Примерная цена модели
              "technical_specifications": { // Технические характеристики
                "nominal_load_capacity": "5000 кг", // Номинальная грузоподъемность
                "load_center_distance": "550 мм", // Расстояние до центра нагрузки
                "drive_type": "4 WD", // Тип привода
                "standard_lift_height": "3000 мм", // Стандартная высота подъема
                "fork_dimensions": { // Размер вилки
                  "length": "1220 мм",
                  "width": "150 мм",
                  "thickness": "55 мм"
                },
                "mast_tilt_angle": { // Угол наклона мачты
                  "forward": "6 град",
                  "backward": "12 град"
                },
                "overall_length_without_forks": "3450 мм", // Общая длина погрузчика (без вил)
                "overall_width": "1860 мм", // Общая ширина погрузчика
                "mast_height": "2557 мм", // Высота мачты погрузчика
                "canopy_height": "2450 мм", // Высота защитного козырька
                "clearance": "320 мм", // Клиренс
                "minimum_turning_radius": "3890 мм", // Минимальный радиус поворота
                "wheelbase": "1950 мм", // База шасси
                "front_wheel_track": "1380 мм", // Протектор переднего колеса
                "weight": "7200 кг", // Вес
                "travel_speed": "32 км/ч", // Скорость передвижения
                "lift_speed": "430 мм/с", // Скорость подъема
                "lowering_speed": "460 мм/с", // Скорость снижения
                "maximum_gradient": "≥ 35%", // Максимальная градуируемость
                "front_tires": "16/70-20", // Передние шины
                "rear_tires": "10-16,5", // Задние шины
                "battery": "24/60", // Аккумуляторная батарея

                "engine": { // Характеристики двигателя
                  "manufacturer": "YunNei", // Производитель двигателя
                  "model": "YN4EZ085-32CR", // Модель двигателя

                  "nominal_power": { // Номинальная мощность
                    "power": "65 кВт",
                    "rpm": "2400"
                  },
                  "fuel_tank_capacity": "110 л" // Объем топливного бака
                },
                "transmission": { // Характеристики трансмиссии
                  "model": "280", // Модель коробки передач
                  "type": "Гидродинамическая" // Тип трансмиссии
                }
              },
              "images": [ // Массив ссылок на фотографии модели
                "https://example.com/redstar_dk05_1.jpg",
                "https://example.com/redstar_dk05_2.jpg"
              ],
              "video_url": "https://example.com/redstar_dk05_video.mp4" // Ссылка на видео с техникой
            }
          ]
        }
      ]
    }
  ]
}
