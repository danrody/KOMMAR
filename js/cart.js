document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.querySelector('.cart-modal');
    const closeCart = document.querySelector('.close-cart');
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelectorAll('.cart-count');
    const totalAmount = document.querySelector('.total-amount');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Cart state
    let cart = [];

    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }

    // Cart functions
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.forEach(el => el.textContent = count);
    }

    function updateTotalAmount() {
        const total = cart.reduce((sum, item) => {
            const price = parseInt(item.price.replace(/[^\d]/g, ''));
            return sum + (price * item.quantity);
        }, 0);
        totalAmount.textContent = total.toLocaleString() + ' ₽';
    }

    function updateCartItems() {
        if (!cartItems) return;
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.images[0]}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `).join('');
    }

    function updateCart() {
        updateCartCount();
        updateTotalAmount();
        updateCartItems();
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Add to cart function
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCart();
        showNotification('Товар добавлен в корзину');
    };

    // Update quantity function
    window.updateQuantity = function(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (!item) return;

        item.quantity += change;
        if (item.quantity < 1) {
            cart = cart.filter(item => item.id !== productId);
        }

        updateCart();
    };

    // Remove from cart function
    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    };

    // Show notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }, 100);
    }

    // Event listeners
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartModal.classList.contains('active') && 
            !cartModal.contains(e.target) && 
            !cartIcon.contains(e.target)) {
            cartModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
