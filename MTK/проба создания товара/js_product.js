document.addEventListener('DOMContentLoaded', () => {
    function createProductPage(product) {
        const equipmentType = product.equipment_types[0];
        const model = equipmentType.models[0];

        const pageContainer = document.createElement('div');
        pageContainer.className = 'product-page';

        const title = document.createElement('h1');
        title.textContent = `${product.make} ${model.model} (${equipmentType.type})`;
        pageContainer.appendChild(title);

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = `Цена: ${model.price} руб.`;
        pageContainer.appendChild(price);

        const imageContainer = document.createElement('div');
        imageContainer.className = 'images';
        model.images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            imageContainer.appendChild(img);
        });
        pageContainer.appendChild(imageContainer);

        if (model.video_url) {
            const video = document.createElement('video');
            video.src = model.video_url;
            video.controls = true;
            pageContainer.appendChild(video);
        }

        const specsContainer = document.createElement('div');
        specsContainer.className = 'specifications';

        function addSpecificationGroup(specs, container, groupTitle = null) {
            if (groupTitle) {
                const groupHeader = document.createElement('h2');
                groupHeader.textContent = groupTitle;
                container.appendChild(groupHeader);
            }
            for (const [key, spec] of Object.entries(specs)) {
                if (typeof spec === 'object' && spec.value && spec.description) {
                    const specItem = document.createElement('p');
                    specItem.textContent = `${spec.description}: ${spec.value}`;
                    container.appendChild(specItem);
                } else if (typeof spec === 'object') {
                    const subgroupContainer = document.createElement('div');
                    subgroupContainer.className = 'specification-group';
                    addSpecificationGroup(spec, subgroupContainer, key);
                    container.appendChild(subgroupContainer);
                }
            }
        }

        addSpecificationGroup(model.technical_specifications, specsContainer);
        pageContainer.appendChild(specsContainer);

        document.body.appendChild(pageContainer);
    }

    // Создаем страницу товара
    createProductPage(product);
});
