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

// Функция сброса фильтров
function resetFilters() {
    const inputs = document.querySelectorAll("#filters input, #filters select");
    inputs.forEach(input => {
        if (input.type === "number" || input.type === "range") {
            input.value = input.defaultValue;
        }
    });
    loadProducts(); // Перезагружаем товары
}

// Функция генерации фильтров
function generateFilters(products) {
    const filterContainer = document.getElementById("filters");
    const filtersBody = filterContainer.querySelector(".filters-body");

    if (!products.length) return;

    const sampleFilters = products[0].filtr; // Берем фильтры из первого товара

    for (let key in sampleFilters) {
        const filterBlock = document.createElement("div");
        filterBlock.classList.add("filter-item");

        // Генерация фильтров для числовых значений (например, цена, мощность)
        if (typeof sampleFilters[key] === 'number') {
            const min = Math.min(...products.map(product => product.filtr[key]));
            const max = Math.max(...products.map(product => product.filtr[key]));

            filterBlock.innerHTML = `
                <label for="${key}">${key}:</label>
                <div class="input-group">
                    <input type="number" id="${key}-min" value="${min}" min="${min}" max="${max}">
                    <span>до</span>
                    <input type="number" id="${key}-max" value="${max}" min="${min}" max="${max}">
                </div>
                <input type="range" id="${key}-range" min="${min}" max="${max}" value="${min}">
            `;

            // Синхронизируем изменения диапазона и полей ввода
            const range = filterBlock.querySelector(`#${key}-range`);
            const minInput = filterBlock.querySelector(`#${key}-min`);
            const maxInput = filterBlock.querySelector(`#${key}-max`);

            range.addEventListener("input", () => {
                minInput.value = range.value;
            });

            minInput.addEventListener("input", () => {
                range.value = minInput.value;
            });

            maxInput.addEventListener("input", () => {
                range.value = maxInput.value;
            });
        }
        // Генерация фильтров для категорий или строковых значений
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

// Функция для применения фильтров
function applyFilters(products) {
    const inputs = document.querySelectorAll("#filters input, #filters select");
    const filters = {};

    inputs.forEach(input => {
        const key = input.id;
        const value = input.value;

        if (value) {
            if (input.type === "range" || input.type === "number") {
                filters[key] = Number(value);
            } else {
                filters[key] = value;
            }
        }
    });

    return products.filter(product => {
        for (let key in filters) {
            const filterValue = filters[key];
            const productValue = product.filtr[key];

            if (typeof filterValue === "number") {
                if (productValue < filterValue) return false;
            } else if (Array.isArray(filterValue)) {
                if (!filterValue.includes(productValue)) return false;
            } else if (productValue !== filterValue) return false;
        }
        return true;
    });
}

// Функция для загрузки товаров (заглушка)
function loadProducts() {
    // Здесь можно загружать товары, например, из API
}

// Генерация фильтров и отображение товаров
generateFilters(getAllProducts());
