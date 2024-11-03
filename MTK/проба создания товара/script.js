function setupSlider(sliderId, minValueId, maxValueId, minRange, maxRange) {
    const slider = document.getElementById(sliderId);
    const minValue = document.getElementById(minValueId);
    const maxValue = document.getElementById(maxValueId);

    slider.addEventListener('input', () => {
        const value = parseInt(slider.value);
        const min = Math.max(value - (maxRange - minRange) / 2, minRange);
        const max = Math.min(value + (maxRange - minRange) / 2, maxRange);

        minValue.value = min;
        maxValue.value = max;
    });
}


// Настройка ползунков
setupSlider('price-slider', 'price-min-value', 'price-max-value', 0, 100000);
setupSlider('load-slider', 'load-min-value', 'load-max-value', 0, 50000);
setupSlider('bucket-slider', 'bucket-min-value', 'bucket-max-value', 0, 10);
setupSlider('power-slider', 'power-min-value', 'power-max-value', 0, 500);
setupSlider('weight-slider', 'weight-min-value', 'weight-max-value', 0, 30000);
setupSlider('lift-slider', 'lift-min-value', 'lift-max-value', 0, 20);
setupSlider('discharge-slider', 'discharge-min-value', 'discharge-max-value', 0, 20);
