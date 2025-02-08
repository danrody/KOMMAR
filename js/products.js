// Данные о товарах
const products = [
    {
        id: 2,
        name: 'KOMMAR HELLO KITTY',
        price: '4990 ₽',
        images: [
            '../photo/KOMMAR.HELLO KITTY/photo_2025-01-28_00-08-18.jpg',
            '../photo/KOMMAR.HELLO KITTY/photo_2025-01-28_00-08-28.jpg'
        ],
        category: 'shirts',
        description: 'Футболка с принтом Hello Kitty',
        characteristics: [
            'Материал: 100% хлопок',
            'Свободный крой',
            'Уникальный принт'
        ],
        care: [
            'Стирка при 30°',
            'Не отбеливать',
            'Гладить при низкой температуре'
        ]
    },
    {
        id: 3,
        name: 'BLUE SKIRT',
        price: '5990 ₽',
        images: [
            '../photo/blue skirt/IMG_8308.JPG',
            '../photo/blue skirt/IMG_8309.JPG'
        ],
        category: 'skirts',
        description: 'Голубая юбка в современном стиле',
        characteristics: [
            'Материал: смесовая ткань',
            'Длина: миди',
            'Цвет: голубой'
        ],
        care: [
            'Стирка при 30°',
            'Не отбеливать',
            'Гладить при средней температуре'
        ]
    },
    {
        id: 4,
        name: 'CROPPED SWEATER',
        price: '6990 ₽',
        images: [
            '../photo/cropped sweater/ддддддддддддд.jpg',
            '../photo/cropped sweater/ггггггггггггг.jpg'
        ],
        category: 'sweaters',
        description: 'Укороченный свитер в стильном дизайне',
        characteristics: [
            'Материал: 100% хлопок',
            'Укороченный фасон',
            'Свободный крой'
        ],
        care: [
            'Стирка при 30°',
            'Не отбеливать',
            'Не сушить в машине'
        ]
    },
    {
        id: 5,
        name: 'FLOWERS T-SHIRT',
        price: '3990 ₽',
        images: [
            '../photo/flowers t-shirt/image_2025-01-27_22-31-51.png',
            '../photo/flowers t-shirt/image_2025-01-27_22-32-51.png'
        ],
        category: 'shirts',
        description: 'Футболка с цветочным принтом',
        characteristics: [
            'Материал: 100% хлопок',
            'Свободный крой',
            'Уникальный принт'
        ],
        care: [
            'Стирка при 30°',
            'Не отбеливать',
            'Гладить при низкой температуре'
        ]
    }
];

// Функция для отображения товаров
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = products.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="product-overlay">
                    <div class="product-actions">
                        <button class="quick-view-btn" onclick="openProductModal(${product.id})">Быстрый просмотр</button>
                    </div>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
            </div>
        </div>
    `).join('');
}

// Функция для открытия модального окна с товаром
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="product-modal-content">
            <button class="close-modal">&times;</button>
            <div class="product-modal-gallery">
                <div class="main-image">
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="thumbnail-list">
                    ${product.images.map((img, index) => `
                        <div class="thumbnail${index === 0 ? ' active' : ''}" onclick="changeMainImage(this, '${img}')">
                            <img src="${img}" alt="${product.name}">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="product-modal-info">
                <h2>${product.name}</h2>
                <p class="price">${product.price}</p>
                <p class="description">${product.description}</p>
                <div class="characteristics">
                    <h3>Характеристики:</h3>
                    <ul>
                        ${product.characteristics.map(char => `<li>${char}</li>`).join('')}
                    </ul>
                </div>
                <div class="care">
                    <h3>Уход:</h3>
                    <ul>
                        ${product.care.map(care => `<li>${care}</li>`).join('')}
                    </ul>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Добавить в корзину</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    });
}
// Функция для рендера карточек на главной
function renderHomeProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    // Выбираем первые 3 товара для примера
    const featuredProducts = products.slice(0, 3);
    
    container.innerHTML = featuredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <div class="product-badge">Новинка</div>
            </div>
        </div>
    `).join('');
}

// Обновите обработчик загрузки документа
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(); // Для страницы all.html
    renderHomeProducts(); // Для главной страницы
    initProductCards(); // Инициализация обработчиков
});

// Инициализация клика по карточкам
function initProductCards() {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            openProductModal(productId);
        });
    });
}
// Функция для изменения главного изображения в модальном окне
function changeMainImage(thumbnail, imageSrc) {
    const mainImage = document.querySelector('.main-image img');
    mainImage.src = imageSrc;
    
    // Обновляем активный thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', renderProducts);
