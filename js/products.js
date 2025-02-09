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
// В функции renderProducts обновите строку с изображением:
`<img src="${product.images[0]}" alt="${product.name}" loading="lazy" style="height: 400px; object-fit: cover;">`

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

// Create product cards
function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price">${product.price}</div>
            </div>
        </div>
    `;
}

// Initialize product menu functionality
function initializeProductMenu() {
    const productCards = document.querySelectorAll('.product-card');
    const productMenu = document.querySelector('.product-menu');
    const productMenuOverlay = document.querySelector('.product-menu-overlay');
    const closeProductMenu = document.querySelector('.close-product-menu');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.product-info h3').textContent;
            const price = card.querySelector('.price').textContent;
            const imageUrl = card.querySelector('.product-image img').src;

            // Update product menu content
            document.querySelector('.product-menu-title').textContent = title;
            document.querySelector('.product-menu-price').textContent = price;
            document.querySelector('.product-menu-image').src = imageUrl;
            
            // Show menu and overlay
            productMenu.classList.add('active');
            productMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close menu handlers
    [closeProductMenu, productMenuOverlay].forEach(element => {
        element.addEventListener('click', () => {
            productMenu.classList.remove('active');
            productMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
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