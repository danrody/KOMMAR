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
        name: 'CROPPED SWEATER',
        price: '6990 ₽',
        images: [
            '../photo/flowers t-shirt/photo_2025-01-27_23-57-49.jpg',
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
        id: 6,
        name: 'FLOWES T-SHIRT',
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
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy" style="height: 400px; object-fit: cover;">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {

    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('#overlay-modal'),
        closeButtons = document.querySelector('.js-modal-close');
 
 
    modalButtons.forEach(function(item){
 
       item.addEventListener('click', function(e) {
 
          e.preventDefault();
 
          var modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
 
          modalElem.classList.add('active');
          overlay.classList.add('active');
 
       }); // end click
    }); // end foreach
 }); // end ready
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

function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
            </div>
        </div>
    `;
}

function initializeProductMenu() {
    const productMenu = document.querySelector('.product-menu');
    const overlay = document.querySelector('.product-menu-overlay');
    const closeBtn = document.querySelector('.close-product-menu');
    
    function closeProductMenu() {
        productMenu.classList.remove('active');
        overlay.classList.remove('active');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductMenu);
    }

    if (overlay) {
        overlay.addEventListener('click', closeProductMenu);
    }

    document.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        if (!productCard) return;

        const productId = parseInt(productCard.dataset.productId);
        const product = products.find(p => p.id === productId);
        
        if (!product) return;

        const menuInner = productMenu.querySelector('.product-menu-inner');
        menuInner.innerHTML = `
            <div class="product-menu-header">
                <h3 class="product-menu-title">${product.name}</h3>
                <button class="close-product-menu">&times;</button>
            </div>
            <div class="product-menu-gallery">
                <img class="product-menu-image" src="${product.images[0]}" alt="${product.name}">
                <div class="product-thumbnails">
                    ${product.images.map(img => `
                        <img class="thumbnail" src="${img}" alt="${product.name}">
                    `).join('')}
                </div>
            </div>
            <div class="product-menu-details">
                <div class="product-price-section">
                    <p class="product-price">${product.price}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Добавить в корзину
                    </button>
                </div>
                <div class="product-description">
                    <p>${product.description}</p>
                </div>
                <div class="product-characteristics">
                    <h4>Характеристики:</h4>
                    <ul>
                        ${product.characteristics.map(char => `<li>${char}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-care">
                    <h4>Уход:</h4>
                    <ul>
                        ${product.care.map(care => `<li>${care}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        // Reinitialize close button event listener
        const newCloseBtn = menuInner.querySelector('.close-product-menu');
        if (newCloseBtn) {
            newCloseBtn.addEventListener('click', closeProductMenu);
        }

        // Initialize thumbnail click handlers
        const thumbnails = menuInner.querySelectorAll('.thumbnail');
        const mainImage = menuInner.querySelector('.product-menu-image');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                mainImage.src = thumbnail.src;
            });
        });

        productMenu.classList.add('active');
        overlay.classList.add('active');
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    
    // Load products
    if (productGrid) {
        productGrid.innerHTML = products.map(product => createProductCard(product)).join('');
        
        // Initialize product menu after products are loaded
        initializeProductMenu();
    }
});

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

// Открываем меню карточки товара
$('.product-card').on('click', function() {
    $(this).find('.product-menu').fadeIn();
  });
  
  // Закрываем меню карточки товара
  $('.product-menu .close-menu').on('click', function() {
    $(this).closest('.product-menu').fadeOut();
  });

  // Добавляем товар в корзину
$('.product-menu .add-to-cart').on('click', function() {
    // Код для добавления товара в корзину
    console.log('Товар добавлен в корзину');
  });

function createProductMenu(product) {
    const menu = document.createElement('div');
    menu.className = 'product-menu';
    menu.innerHTML = `
        <div class="product-menu-inner">
            <div class="product-menu-header">
                <h2 class="product-menu-title">${product.name}</h2>
                <button class="close-product-menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
            
            <div class="product-menu-gallery">
                <img src="${product.images[0]}" alt="${product.name}" class="product-menu-image">
            </div>
            
            <div class="product-menu-content">
                <div class="product-menu-info-grid">
                    <div class="info-item">
                        <div class="info-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Материал</h3>
                            <p>Высококачественный хлопок</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Производство</h3>
                            <p>Сделано в России</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20.38 3.46L16.42 18.62C16.28 19.26 15.99 19.84 15.56 20.31C15.12 20.78 14.56 21.11 13.93 21.26C13.31 21.42 12.65 21.39 12.04 21.18C11.44 20.97 10.91 20.59 10.51 20.09L8.50999 17.67C8.18999 17.29 7.78999 17.01 7.33999 16.84L3.77999 15.64C3.15999 15.45 2.60999 15.08 2.18999 14.58C1.76999 14.08 1.49999 13.47 1.41999 12.83C1.33999 12.18 1.44999 11.52 1.73999 10.93C2.02999 10.35 2.48999 9.86 3.05999 9.53L17.86 2.11C18.77 1.67 19.84 1.72 20.7 2.25C21.56 2.77 22.11 3.7 22.18 4.72C22.24 4.29 22.21 3.86 22.07 3.45C21.94 3.04 21.71 2.66 21.39 2.34C21.08 2.03 20.7 1.79 20.28 1.66C19.87 1.52 19.44 1.49 19.01 1.55C18.58 1.62 18.18 1.79 17.83 2.04L3.01999 9.46C2.44999 9.79 1.98999 10.28 1.69999 10.86C1.40999 11.45 1.29999 12.11 1.37999 12.76C1.45999 13.4 1.72999 14.01 2.14999 14.51C2.56999 15.01 3.11999 15.38 3.73999 15.57L7.29999 16.77C7.74999 16.94 8.14999 17.22 8.46999 17.6L10.47 20.02C10.87 20.52 11.4 20.9 12 21.11C12.61 21.32 13.27 21.35 13.89 21.19C14.52 21.04 15.08 20.71 15.52 20.24C15.95 19.77 16.24 19.19 16.38 18.55L20.34 3.39C20.48 2.96 20.51 2.51 20.44 2.07C20.36 1.63 20.18 1.22 19.91 0.87C20.17 1.23 20.35 1.64 20.43 2.08C20.5 2.52 20.48 2.97 20.35 3.4L20.38 3.46Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Доставка</h3>
                            <p>Быстрая доставка по России</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22 12H2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Размеры</h3>
                            <p>S, M, L, XL доступны</p>
                        </div>
                    </div>
                </div>
                
                <div class="product-menu-price">14 990 ₽</div>
            </div>
            
            <div class="product-menu-actions">
                <button class="add-to-cart-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Добавить в корзину
                </button>
            </div>
        </div>
    `;
    return menu;
}