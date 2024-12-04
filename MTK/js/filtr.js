// Функция сброса фильтров
function resetFilters() {
    const inputs = document.querySelectorAll("#filters input, #filters select");
    inputs.forEach(input => (input.value = ""));
    loadProducts(); // Перезагружаем товары
}

// Функция генерации фильтров
function generateFilters(products) {
    const filterContainer = document.getElementById("filters");
    filterContainer.innerHTML = ""; // Очищаем старые фильтры

    // Добавление кнопки фильтров для маленьких экранов
    const header = document.createElement("button");
    header.classList.add("filters-header");
    header.textContent = "Фильтры";
    header.addEventListener("click", toggleFilters); // Добавляем функционал для скрытия/раскрытия
    filterContainer.appendChild(header);

    // Контейнер для фильтров
    const filtersBody = document.createElement("div");
    filtersBody.classList.add("filters-body");
    filterContainer.appendChild(filtersBody);

    if (!products.length) return;

    const sampleFilters = products[0].filtr; // Берем фильтры из первого товара

    for (let key in sampleFilters) {
        const filterBlock = document.createElement("div");
        filterBlock.classList.add("filter-item");

        // Генерация фильтров для числовых значений (например, цена, мощность)
        if (typeof sampleFilters[key] === 'number') {
            filterBlock.innerHTML = `
                <label for="${key}">${key}:</label>
                <input type="range" id="${key}" min="0" max="100000" step="1000" value="${sampleFilters[key]}">
            `;
        }
        // Генерация фильтров для категорий или строковых значений (например, тип техники)
        else if (Array.isArray(sampleFilters[key])) {
            let optionsHTML = '';
            sampleFilters[key].forEach(option => {
                optionsHTML += `<option value="${option}">${option}</option>`;
            });
            filterBlock.innerHTML = `
                <label for="${key}">${key}:</label>
                <select id="${key}">
                    ${optionsHTML}
                </select>
            `;
        }

        filtersBody.appendChild(filterBlock);
    }

    // Создаём кнопки "Применить фильтры" и "Сбросить фильтры"
    const actionsBlock = document.createElement("div");
    actionsBlock.classList.add("filter-actions");

    const applyFilterButton = document.createElement("button");
    applyFilterButton.textContent = "Применить фильтры";
    applyFilterButton.addEventListener("click", () => {
        const filteredProducts = applyFilters(products);
        displayProducts(filteredProducts);
    });

    const resetFilterButton = document.createElement("button");
    resetFilterButton.textContent = "Сбросить фильтры";
    resetFilterButton.addEventListener("click", resetFilters);

    actionsBlock.appendChild(applyFilterButton);
    actionsBlock.appendChild(resetFilterButton);

    filtersBody.appendChild(actionsBlock);
}

// Функция для скрытия/раскрытия фильтров
function toggleFilters() {
    const filtersBody = document.querySelector(".filters-body");
    const header = document.querySelector(".filters-header");

    if (filtersBody.style.display === "none" || !filtersBody.style.display) {
        filtersBody.style.display = "block"; // Показываем фильтры
        header.textContent = "Скрыть фильтры";
    } else {
        filtersBody.style.display = "none"; // Скрываем фильтры
        header.textContent = "Фильтры";
    }
}

// Функция применения фильтров
function applyFilters(products) {
    const inputs = document.querySelectorAll("#filters input, #filters select");
    const filters = {};

    inputs.forEach(input => {
        const key = input.id;
        const value = input.value;

        if (value) {
            filters[key] = Number(value);
        }
    });

    return products.filter(product => {
        for (let key in filters) {
            if (!product.filtr[key] || product.filtr[key] < filters[key]) {
                return false;
            }
        }
        return true;
    });
}

// Вызов функции для начальной генерации фильтров и товаров
generateFilters(getAllProducts());

// Функция для скрытия кнопки фильтра на больших экранах
function adjustFilterButton() {
    const filterButton = document.querySelector(".filters-header");
    const width = window.innerWidth;
    if (width < 768) {
        filterButton.style.display = "block"; // Показываем кнопку на мобильных устройствах
    } else {
        filterButton.style.display = "none"; // Скрываем кнопку на больших экранах
    }
}

// Обновляем отображение кнопки фильтров при изменении размера окна
window.addEventListener("resize", adjustFilterButton);

// Инициализируем кнопку при первой загрузке страницы
adjustFilterButton();
