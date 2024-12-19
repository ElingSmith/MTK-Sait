import os
import json
import pymongo
from pymongo import MongoClient
from tkinter import Tk, filedialog

# Подключение к MongoDB
client = MongoClient("mongodb://localhost:27017/")  # Здесь укажите свой URL для подключения
db = client["spetstekhnika_db"]  # Название базы данных
collection = db["products"]  # Название коллекции для товаров


# Окно для выбора папки
def select_folder():
    root = Tk()
    root.withdraw()  # Скрываем главное окно
    folder_path = filedialog.askdirectory()  # Открываем диалог выбора папки
    return folder_path


# Функция для загрузки данных из JSON файлов в базу
def load_json_to_mongo(folder_path):
    # Получаем список файлов JSON в выбранной папке
    json_files = [f for f in os.listdir(folder_path) if f.endswith('.json')]

    for file_name in json_files:
        file_path = os.path.join(folder_path, file_name)

        # Открываем и читаем данные из JSON файла
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)

        # Вставка данных в коллекцию
        inserted_document = collection.insert_one(data)
        print(f"Товар из файла {file_name} вставлен с ID: {inserted_document.inserted_id}")


# Основной код
folder_path = select_folder()  # Выбор папки
if folder_path:
    load_json_to_mongo(folder_path)  # Загружаем данные из JSON в MongoDB
else:
    print("Папка не выбрана.")
