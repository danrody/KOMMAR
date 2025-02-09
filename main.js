// Sample product data structure - replace with your actual product data
const products = [
    {
        name: 'KOMMAR.HELLO KITTY',
        image: 'photo/KOMMAR.HELLO KITTY/main.jpg',
        price: '₽ 4990'
    },
    {
        name: 'Blue Skirt',
        image: 'photo/blue skirt/main.jpg',
        price: '₽ 2990'
    },
    {
        name: 'Cropped Sweater',
        image: 'photo/cropped sweater/main.jpg',
        price: '₽ 3990'
    },
    {
        name: 'Flowers T-shirt',
        image: 'photo/flowers t-shirt/main.jpg',
        price: '₽ 2490'
    },
    {
        name: 'Glamour Collection',
        image: 'photo/glamour/main.jpg',
        price: '₽ 5490'
    },
    {
        name: 'Classic Hoodie',
        image: 'photo/hoodie/main.jpg',
        price: '₽ 3990'
    }
];

// Function to display products
function displayProducts(containerSelector, productList) {
    const container = document.getElementById(containerSelector);
    if (!container) return;

    container.innerHTML = '';

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        `;

        container.appendChild(productCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display featured products on the main page
    displayProducts('productsGrid', products);
});

// Handle category filtering
function filterProducts(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
