import json
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Настройка драйвера
options = webdriver.ChromeOptions()
# options.add_argument("--headless")  # Запуск в фоновом режиме (без графического интерфейса)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

while True:
    # Запрос URL у пользователя
    url = input("Введите Ссылку (или 'exit' для выхода): ")
    if url.lower() == 'exit':
        break  # Выход из цикла, если пользователь ввел 'exit'

    driver.get(url)

    # Ожидание загрузки DOM
    time.sleep(5)  # Вы можете настроить время ожидания или использовать WebDriverWait для более надежного ожидания

    # Сбор названия товара
    try:
        product_name_element = driver.find_element(By.XPATH, '//h1[@itemprop="name"]')
        product_name = product_name_element.text
        print(f"Название товара: {product_name}")
    except Exception as e:
        print(f"Не удалось получить название товара: {e}")
        continue  # Переход к следующему URL, если название не найдено

    # Проверка наличия кнопки "Показать все"
    try:
        show_all_button = driver.find_elements(By.XPATH, '//a[@class="style-scroll-ar-down show-hidden"]')
        if show_all_button:
            show_all_button[0].click()  # Кликаем по кнопке "Показать все"
            time.sleep(1)  # Ждем немного, чтобы все данные прогрузились
    except Exception as e:
        print(f"Не удалось кликнуть по кнопке 'Показать все': {e}")

    # Сбор характеристик
    characteristics = {}
    try:
        # Поиск div с классом "cart-char-table-wrap show-hidden-parent"
        characteristics_div = driver.find_element(By.CLASS_NAME, "cart-char-table-wrap")

        # Поиск всех таблиц внутри этого div
        tables = characteristics_div.find_elements(By.TAG_NAME, "table")

        for table in tables:
            rows = table.find_elements(By.TAG_NAME, "tr")
            for row in rows:
                # Получаем характеристику и значение
                characteristic_name = row.find_element(By.CLASS_NAME, "left").text.strip()
                try:
                    value = row.find_element(By.CLASS_NAME, "right").text.strip()
                    characteristics[characteristic_name] = value
                except Exception as e:
                    print(f"Не удалось получить значение для характеристики '{characteristic_name}': {e}")
    except Exception as e:
        print(f"Не удалось найти характеристики: {e}")
        continue  # Переход к следующему URL, если характеристики не найдены

    # Вывод характеристик в терминал
    for char_name, char_value in characteristics.items():
        print(f"{char_name}: {char_value}")

    # Создание JSON-вывода
    output_data = {
        'product_name': product_name,
        'characteristics': characteristics
    }

    # Запись в JSON файл
    with open(f'{product_name}.json', 'w', encoding='utf-8') as json_file:
        json.dump(output_data, json_file, ensure_ascii=False, indent=4)

# Закрытие драйвера
driver.quit()
