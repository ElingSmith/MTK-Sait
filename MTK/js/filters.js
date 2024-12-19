const filterConfig = {
    spetstekhnika: {
        track_width: {min: 300, max: 1000, step: 50, unit: "Ширина гусеницы (мм)"},
        drawbar_pull: {min: 10, max: 1000, step: 10, unit: "Тяговое усилие (кН)"},
        turning_radius: {min: 2, max: 15, step: 0.5, unit: "Радиус поворота (м)"},
    },

    dorozhno_stroitelnaya: {
        track_width: {min: 300, max: 1000, step: 50, unit: "Ширина гусеницы (мм)"},
        drawbar_pull: {min: 10, max: 1000, step: 10, unit: "Тяговое усилие (кН)"},
        turning_radius: {min: 2, max: 15, step: 0.5, unit: "Радиус поворота (м)"},
    },

    Backhoe_Loader: {
        price: {min: 1500000, max: 10000000, step: 10000, unit: "Цена, руб"},
        capacity: {min: 700, max: 3200, step: 50, unit: "Грузоподъемность (кг)"},
        bucket_volume: {min: 0, max: 2, step: 0.1, unit: "Объем ковша (м³)"},
        weight: {min: 2400, max: 11500, step: 100, unit: "Масса (кг)"},
        power: {min: 30, max: 130, step: 5, unit: "Мощность двигателя, л.с."},
        lifting_height: {min: 2900, max: 11000, step: 100, unit: "Максимальная высота подъема"},
        unloading_height: {min: 2400, max: 9000, step: 100, unit: "Максимальная высота разгрузки"},
        drive_type: {
            options: [
                {value: "full_drive", label: "Полный привод"},
                {value: "front_drive", label: "Передний привод"},
                {value: "rear_drive", label: "Задний привод"}
            ],
            unit: "Тип привода"
        },
        steering_mode: {
            options: [
                {value: "front_wheel", label: "Передние колеса"},
                {value: "all_wheel", label: "Все колеса"},
                {value: "crab_walk", label: "Крабовый ход"}
            ],
            unit: "Режим управления"
        },
    },


    katki: {
        price: {min: 2500000, max: 5000000, step: 10000, unit: "Цена, руб"},
        weight: {min: 2500, max: 4000, step: 100, unit: "Масса (кг)"},
        drum_width: {min: 1000, max: 2200, step: 100, unit: "Ширина вальца (мм)"},
        static_linear_load: {min: 20, max: 60, step: 5, unit: "Статическая линейная нагрузка (кН/м)"},
        vibration_frequency: {min: 30, max: 70, step: 5, unit: "Частота вибрации (Гц)"},
        vibration_amplitude: {min: 0.3, max: 1.5, step: 0.1, unit: "Амплитуда вибрации (мм)"},
        engine_power: {min: 20, max: 150, step: 10, unit: "Мощность двигателя (л.с.)"},
        number_of_drums: {options: ["Одновальцевый", "Двухвальцевый"], unit: "Количество валов"}
    },
    bulldoziery: {
        weight: {min: 5000, max: 100000, step: 1000, unit: "Масса (кг)"},
        engine_power: {min: 50, max: 1000, step: 10, unit: "Мощность двигателя (л.с.)"},
        blade_width: {min: 2000, max: 7000, step: 100, unit: "Ширина отвала (мм)"},
        blade_capacity: {min: 1, max: 25, step: 0.5, unit: "Объем отвала (м³)"},
        drive_type: {
            options: [
                {value: "full_drive", label: "Полный привод"},
                {value: "front_drive", label: "Передний привод"},
                {value: "rear_drive", label: "Задний привод"}
            ],
            unit: "Тип привода"
        },
        steering_mode: {
            options: [
                {value: "front_wheel", label: "Передние колеса"},
                {value: "all_wheel", label: "Все колеса"},
                {value: "crab_walk", label: "Крабовый ход"}
            ],
            unit: "Режим управления"
        },

        track_width: {min: 300, max: 1000, step: 50, unit: "Ширина гусеницы (мм)"},
        drawbar_pull: {min: 10, max: 1000, step: 10, unit: "Тяговое усилие (кН)"},
        turning_radius: {min: 2, max: 15, step: 0.5, unit: "Радиус поворота (м)"},
    },


    pogruzchiki: {
        track_width: {min: 300, max: 1000, step: 50, unit: "Ширина гусеницы (мм)"},
        drawbar_pull: {min: 10, max: 1000, step: 10, unit: "Тяговое усилие (кН)"},
        turning_radius: {min: 2, max: 15, step: 0.5, unit: "Радиус поворота (м)"},
    },

    teleskopicheskie: {
        price: {min: 1500000, max: 10000000, step: 10000, unit: "Цена, руб"},
        capacity: {min: 700, max: 3200, step: 50, unit: "Грузоподъемность (кг)"},
        bucket_volume: {min: 0, max: 2, step: 0.1, unit: "Объем ковша (м³)"},
        weight: {min: 2400, max: 11500, step: 100, unit: "Масса (кг)"},
        power: {min: 30, max: 130, step: 5, unit: "Мощность двигателя, л.с."},
        lifting_height: {min: 2900, max: 11000, step: 100, unit: "Максимальная высота подъема"},
        unloading_height: {min: 2400, max: 9000, step: 100, unit: "Максимальная высота разгрузки"},
        drive_type: {
            options: [
                {value: "full_drive", label: "Полный привод"},
                {value: "front_drive", label: "Передний привод"},
                {value: "rear_drive", label: "Задний привод"}
            ],
            unit: "Тип привода"
        },
        steering_mode: {
            options: [
                {value: "front_wheel", label: "Передние колеса"},
                {value: "all_wheel", label: "Все колеса"},
                {value: "crab_walk", label: "Крабовый ход"}
            ],
            unit: "Режим управления"
        }

    },

    frontalnye: {

        price: {min: 1500000, max: 5000000, step: 10000, unit: "Цена, руб"},
        capacity: {min: 800, max: 3000, step: 50, unit: "Грузоподъемность (кг)"},
        bucket_volume: {min: 0, max: 2, step: 0.1, unit: "Объем ковша (м³)"},
        weight: {min: 2400, max: 7500, step: 100, unit: "Масса (кг)"},
        power: {min: 30, max: 130, step: 5, unit: "Мощность двигателя, л.с."},
        lifting_height: {min: 2900, max: 5500, step: 100, unit: "Максимальная высота подъема"},
        unloading_height: {min: 2900, max: 4700, step: 100, unit: "Максимальная высота разгрузки"},
        drive_type: {
            options: [
                {value: "full_drive", label: "Полный привод"},
                {value: "rear_drive", label: "Задний привод"}
            ],
            unit: "Тип привода"
        },
    },
    mini_pogruzchiki: {
        price: {min: 3000000, max: 5000000, step: 10000, unit: "Цена, руб"},
        capacity: {min: 800, max: 3000, step: 50, unit: "Грузоподъемность (кг)"},
        bucket_volume: {min: 0, max: 2, step: 0.1, unit: "Объем ковша (м³)"},
        weight: {min: 2400, max: 7500, step: 100, unit: "Масса (кг)"},
        lifting_height: {min: 4000, max: 4070, step: 1, unit: "Максимальная высота подъема"},
        unloading_height: {min: 2400, max: 2500, step: 100, unit: "Максимальная высота разгрузки"}
    },
    vilochnye: {
        price: {min: 1500000, max: 5000000, step: 10000, unit: "Цена, руб"},
        capacity: {min: 2000, max: 5000, step: 50, unit: "Грузоподъемность (кг)"},
        weight: {min: 3000, max: 6000, step: 100, unit: "Масса (кг)"},
        power: {min: 30, max: 130, step: 5, unit: "Мощность двигателя, л.с."},
        lifting_height: {min: 3000, max: 7000, step: 1, unit: "Максимальная высота подъема"},
        unloading_height: {min: 3000, max: 7000, step: 100, unit: "Максимальная высота разгрузки"}
    }
};


// Получение параметров из URL
const urlParams = new URLSearchParams(window.location.search);



function getCategoryFromURL(urlParams) {
    const currentCategory = urlParams.get("category");
    const currentSubcat = urlParams.get("subcat");
    const currentSubsubcat = urlParams.get("subsubcat");

    // Если есть subsubcat, возвращаем его
    if (currentSubsubcat) {
        return { param: currentSubsubcat, str: `"subsubcategory": "${currentSubsubcat}"` };
    }
    // Если нет subsubcat, но есть subcat, возвращаем его
    if (currentSubcat) {
        return { param: currentSubcat, str: `"subcategory": "${currentSubcat}"` };
    }
    // Если нет ни subsubcat, ни subcat, возвращаем category
    return { param: currentCategory, str: `"category": "${currentCategory}"` };
}



// Получаем нужную конфигурацию
const currentFilters = filterConfig[getCategoryFromURL(urlParams).param];
console.log("категория = "+getCategoryFromURL(urlParams).param);

// Инициализация фильтров
function createSlider(container, id, min, max, step, unit) {
    const sliderWrapper = document.createElement("div");
    sliderWrapper.classList.add("slider-wrapper");
    sliderWrapper.innerHTML = `
        <label>${unit}:</label>
        <div id="${id}-slider"></div>
        <div>
          <input type="number" id="${id}-input-min" class="filter-input" value="${min}" />
          <span> - </span>
          <input type="number" id="${id}-input-max" class="filter-input" value="${max}" />
        </div>
    `;
    container.appendChild(sliderWrapper);

    const slider = document.getElementById(`${id}-slider`);
    noUiSlider.create(slider, {
        start: [min, max],
        connect: true,
        range: {min: min, max: max},
        step: step,
    });

    // Обновляем значения при изменении ползунка
    slider.noUiSlider.on("update", (values) => {
        document.getElementById(`${id}-input-min`).value = parseFloat(values[0]).toFixed(step < 1 ? 1 : 0);
        document.getElementById(`${id}-input-max`).value = parseFloat(values[1]).toFixed(step < 1 ? 1 : 0);
    });

    // Обновляем ползунок при изменении вручную
    document.getElementById(`${id}-input-min`).addEventListener("input", (e) => {
        slider.noUiSlider.set([e.target.value, null]);
    });
    document.getElementById(`${id}-input-max`).addEventListener("input", (e) => {
        slider.noUiSlider.set([null, e.target.value]);
    });

    return slider;
}

function createMultiSelect(container, id, options, unit) {
    const selectWrapper = document.createElement("div");
    selectWrapper.classList.add("select-wrapper");
    selectWrapper.innerHTML = `
        <label>${unit}:</label>
        <select id="${id}-select" class="filter-select" multiple>
          ${options
        .map(
            (option) =>
                `<option value="${option.value || option}">${option.label || option}</option>`
        )
        .join("")}
        </select>
    `;
    container.appendChild(selectWrapper);

    const selectElement = document.getElementById(`${id}-select`);

    // Обработка стрелок для выбора
    selectElement.addEventListener("keydown", (event) => {
        const options = Array.from(selectElement.options);
        const selectedIndex = selectElement.selectedIndex;

        if (event.key === "ArrowUp" && selectedIndex > 0) {
            options[selectedIndex - 1].selected = true;
        } else if (event.key === "ArrowDown" && selectedIndex < options.length - 1) {
            options[selectedIndex + 1].selected = true;
        }
    });

    return selectElement;
}

function createCheckboxGroup(container, id, options, unit) {
    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.classList.add("checkbox-wrapper");
    checkboxWrapper.innerHTML = `<label>${unit}:</label>`;
    options.forEach((option) => {
        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox-item");
        checkbox.innerHTML = `
            <input type="checkbox" id="${id}-${option.value || option}" value="${
            option.value || option
        }">
            <label for="${id}-${option.value || option}">${option.label || option}</label>
        `;
        checkboxWrapper.appendChild(checkbox);
    });
    container.appendChild(checkboxWrapper);

    // Возвращаем все чекбоксы группы
    return Array.from(checkboxWrapper.querySelectorAll("input[type='checkbox']"));
}

function renderFilters(filters) {
    const slidersContainer = document.getElementById("sliders");
    slidersContainer.innerHTML = ""; // Очищаем старые фильтры

    const controls = {};
    for (const [key, config] of Object.entries(filters)) {
        if (config.options) {
            // Обработка группы чекбоксов
            controls[key] = createCheckboxGroup(
                slidersContainer,
                key,
                config.options,
                config.unit
            );
        } else {
            // Обработка слайдеров
            controls[key] = createSlider(
                slidersContainer,
                key,
                config.min,
                config.max,
                config.step,
                config.unit
            );
        }
    }

    return controls;
}

// Инициализация фильтров для текущих категорий
const sliders = renderFilters(currentFilters);

// Обработка применения фильтров
document.getElementById("apply-filters").addEventListener("click", () => {
    // Получаем строку категории
    const category_tehn = getCategoryFromURL(urlParams).str;

    // Инициализируем объект filters с категорией
    const filters = {
        category: category_tehn
    };

    // Проходим по всем фильтрам
    for (const [key, control] of Object.entries(sliders)) {
        if (control.noUiSlider) {
            const values = control.noUiSlider.get();
            const minValue = parseFloat(values[0]);
            const maxValue = parseFloat(values[1]);

            // Если значения слайдера изменены (отличаются от исходных min и max)
            const config = currentFilters[key];
            if (minValue !== config.min || maxValue !== config.max) {
                filters[`${key}_min`] = minValue;
                filters[`${key}_max`] = maxValue;
            }
        } else {
            // Для группы чекбоксов собираем отмеченные значения
            const selectedOptions = control
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);

            // Если были выбраны новые опции (не пусто), добавляем в фильтры
            if (selectedOptions.length > 0) {
                filters[key] = selectedOptions;
            }
        }
    }

    // Формирование запроса
    const query = JSON.stringify(filters, null, 2);

    // Отображаем запрос в элементе с id "output"
    document.getElementById("output").textContent = query;

    // Отправка запроса на сервер (пример)
    console.log("Запрос отправлен на сервер:", query);
});

// Сброс фильтров
document.getElementById("reset-filters").addEventListener("click", () => {
    for (const [key, control] of Object.entries(sliders)) {
        if (control.noUiSlider) {
            const config = currentFilters[key];
            control.noUiSlider.set([config.min, config.max]);
        } else {
            // Для группы чекбоксов снимаем все отметки
            control.forEach((checkbox) => (checkbox.checked = false));
        }
    }
    document.getElementById("output").textContent = "{}";
});
