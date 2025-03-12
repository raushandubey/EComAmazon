// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeNavDropdowns();
    initializeSearchBar();
    initializeBackToTop();
    initializeProductCarousel();
    initializeMobileMenu();
    initializeCart(); // Initialize cart functionality
    
    // Add window resize listener for responsive adjustments
    window.addEventListener('resize', handleResponsiveLayout);
    
    // Initial call to handle layout based on current window size
    handleResponsiveLayout();
});

// Handle dropdown menus for account and lists
function initializeNavDropdowns() {
    const accountDropdown = document.querySelector('.nav-singin');
    const returnDropdown = document.querySelector('.nav-return');
    
    // Create dropdown content for account
    if (accountDropdown) {
        const dropdownContent = document.createElement('div');
        dropdownContent.className = 'dropdown-content';
        
        // Create "Sign in" button
        const signInBtn = document.createElement('div');
        signInBtn.className = 'dropdown-signin-btn';
        signInBtn.innerHTML = '<a href="#">Sign in</a>';
        dropdownContent.appendChild(signInBtn);
        
        // Add dropdown options
        const newCustomer = document.createElement('div');
        newCustomer.className = 'dropdown-divider';
        newCustomer.innerHTML = '<span>New customer? </span><a href="#">Start here</a>';
        dropdownContent.appendChild(newCustomer);
        
        // Add lists
        const listSection = document.createElement('div');
        listSection.className = 'dropdown-section';
        
        const yourLists = document.createElement('div');
        yourLists.className = 'dropdown-section-title';
        yourLists.textContent = 'Your Lists';
        listSection.appendChild(yourLists);
        
        const listOptions = ['Create a List', 'Find a List or Registry', 'Amazon Smile Charity Lists'];
        listOptions.forEach(option => {
            const listItem = document.createElement('a');
            listItem.href = '#';
            listItem.textContent = option;
            listSection.appendChild(listItem);
        });
        
        dropdownContent.appendChild(listSection);
        
        // Add account options
        const accountSection = document.createElement('div');
        accountSection.className = 'dropdown-section';
        
        const yourAccount = document.createElement('div');
        yourAccount.className = 'dropdown-section-title';
        yourAccount.textContent = 'Your Account';
        accountSection.appendChild(yourAccount);
        
        const accountOptions = ['Account', 'Orders', 'Recommendations', 'Browsing History', 'Watchlist', 'Kindle Unlimited', 'Content & Devices', 'Subscribe & Save Items', 'Memberships & Subscriptions', 'Prime Membership', 'Amazon Credit Cards', 'Music Library', 'Start a Selling Account', 'Register for a Business Account', 'Customer Service'];
        accountOptions.forEach(option => {
            const accountItem = document.createElement('a');
            accountItem.href = '#';
            accountItem.textContent = option;
            accountSection.appendChild(accountItem);
        });
        
        dropdownContent.appendChild(accountSection);
        
        // Append dropdown to account element
        accountDropdown.appendChild(dropdownContent);
        
        // Add hover event listeners
        accountDropdown.addEventListener('mouseenter', () => {
            dropdownContent.style.display = 'block';
        });
        
        accountDropdown.addEventListener('mouseleave', () => {
            dropdownContent.style.display = 'none';
        });
    }
}

// Handle search bar functionality
function initializeSearchBar() {
    const searchInput = document.querySelector('.Search-input');
    const searchIcon = document.querySelector('.searc-icon');
    const searchSelect = document.querySelector('.search-select');
    
    if (searchInput && searchIcon) {
        // Focus input when search box is clicked
        searchInput.addEventListener('focus', () => {
            document.querySelector('.nav-search').classList.add('focused');
        });
        
        searchInput.addEventListener('blur', () => {
            document.querySelector('.nav-search').classList.remove('focused');
        });
        
        // Handle search button click
        searchIcon.addEventListener('click', () => {
            handleSearch();
        });
        
        // Handle enter key in search input
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Handle search functionality
    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        const category = searchSelect.value;
        
        if (searchTerm) {
            alert(`Searching for "${searchTerm}" in ${category}`);
            // In a real implementation, this would redirect to a search results page
            // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(category)}`;
        }
    }
}

// Back to top button functionality
function initializeBackToTop() {
    const backToTopBtn = document.querySelector('.footer-panel1');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Create and initialize product carousel
function initializeProductCarousel() {
    // Create a new carousel section
    const mainContent = document.querySelector('.hero-section').parentNode;
    const heroSection = document.querySelector('.hero-section');
    
    // Create carousel container
    const carouselSection = document.createElement('div');
    carouselSection.className = 'carousel-section';
    
    // Create carousel heading
    const carouselHeading = document.createElement('div');
    carouselHeading.className = 'carousel-heading';
    carouselHeading.innerHTML = `
        <h2>Top Deals For You</h2>
        <div class="carousel-controls">
            <div class="carousel-prev"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="carousel-next"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
    `;
    carouselSection.appendChild(carouselHeading);
    
    // Create carousel items container
    const carouselItems = document.createElement('div');
    carouselItems.className = 'carousel-items';
    
    // Add carousel items (these would typically be dynamically generated)
    const products = [
        { name: 'Wireless Headphones', price: 'Rs 5999', discount: '20% off', image: 'shopping.webp' },
        { name: 'Smart Watch', price: 'Rs 1999', discount: '15% off', image: 'smartwatch.webp' },
        { name: 'Bluetooth Speaker', price: 'Rs 1499', discount: '30% off', image: 'B S.webp' },
        { name: 'Fitness Tracker', price: 'Rs 5999', discount: '25% off', image: 'fitness.webp' },
        { name: 'Wireless Earbuds', price: 'RS 4999', discount: '10% off', image: 'eadbuds.webp' },
        { name: 'Gaming Mouse', price: 'Rs 1299', discount: '40% off', image: 'mouse.webp' }
    ];
    
    products.forEach(product => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <div class="carousel-item-image" style="background-image:url('${product.image}')"></div>
            <div class="carousel-item-details">
                <div class="carousel-item-discount">${product.discount}</div>
                <div class="carousel-item-name">${product.name}</div>
                <div class="carousel-item-price">${product.price}</div>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        carouselItems.appendChild(item);
    });
    
    carouselSection.appendChild(carouselItems);
    
    // Insert carousel after hero section
    mainContent.insertBefore(carouselSection, heroSection.nextSibling);
    
    // Initialize carousel controls
    let currentPosition = 0;
    const itemWidth = 220; // Width of each carousel item including margin
    const visibleItems = Math.floor(carouselItems.offsetWidth / itemWidth);
    const maxPosition = products.length - visibleItems;
    
    // Handle carousel navigation
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition--;
                updateCarouselPosition();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentPosition < maxPosition) {
                currentPosition++;
                updateCarouselPosition();
            }
        });
    }
    
    // Update carousel position
    function updateCarouselPosition() {
        carouselItems.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
        
        // Update button states
        prevBtn.classList.toggle('disabled', currentPosition === 0);
        nextBtn.classList.toggle('disabled', currentPosition >= maxPosition);
    }
    
    // Initial position update
    updateCarouselPosition();
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.parentNode.querySelector('.carousel-item-name').textContent;
            alert(`${productName} added to cart!`);
            updateCartCount();
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.panel-all');
    
    if (mobileMenuBtn) {
        // Create mobile menu
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = `
            <div class="mobile-menu-header">
                <div class="mobile-menu-close"><i class="fa-solid fa-xmark"></i></div>
                <div class="mobile-menu-user">
                    <i class="fa-solid fa-user"></i>
                    <span>Hello, Sign in</span>
                </div>
            </div>
            <div class="mobile-menu-content">
                <div class="mobile-menu-section">
                    <h3>Digital Content & Devices</h3>
                    <ul>
                        <li><a href="#">Amazon Music</a></li>
                        <li><a href="#">Kindle E-readers & Books</a></li>
                        <li><a href="#">Amazon Appstore</a></li>
                    </ul>
                </div>
                <div class="mobile-menu-section">
                    <h3>Shop By Department</h3>
                    <ul>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Computers</a></li>
                        <li><a href="#">Smart Home</a></li>
                        <li><a href="#">Arts & Crafts</a></li>
                        <li><a href="#">See All</a></li>
                    </ul>
                </div>
                <div class="mobile-menu-section">
                    <h3>Programs & Features</h3>
                    <ul>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">Amazon Live</a></li>
                        <li><a href="#">International Shopping</a></li>
                    </ul>
                </div>
                <div class="mobile-menu-section">
                    <h3>Help & Settings</h3>
                    <ul>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Customer Service</a></li>
                        <li><a href="#">Sign Out</a></li>
                    </ul>
                </div>
            </div>
        `;
        
        document.body.appendChild(mobileMenu);
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Close mobile menu when clicking close button or overlay
        document.querySelector('.mobile-menu-close').addEventListener('click', closeMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);
        
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// Cart functionality
function initializeCart() {
    // Load cart from localStorage if available
    loadCartFromStorage();
    
    // Update cart display
    updateCartDisplay();
    
    // Add cart click handler
    const cartElement = document.querySelector('.nav-cart');
    if (cartElement) {
        cartElement.addEventListener('click', toggleCartDropdown);
        
        // Create cart dropdown
        createCartDropdown(cartElement);
    }
    
    // Add event listeners for add to cart buttons throughout the page
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('add-to-cart-btn')) {
            handleAddToCart(e);
        }
    });
}

// Create cart dropdown/sidebar
function createCartDropdown(cartElement) {
    const cartDropdown = document.createElement('div');
    cartDropdown.className = 'cart-dropdown';
    cartDropdown.innerHTML = `
        <div class="cart-dropdown-header">
            <h3>Shopping Cart</h3>
            <div class="cart-dropdown-close"><i class="fa-solid fa-xmark"></i></div>
        </div>
        <div class="cart-items-container">
            <div class="cart-empty-message">Your Amazon Cart is empty</div>
            <div class="cart-items-list"></div>
        </div>
        <div class="cart-dropdown-footer">
            <div class="cart-subtotal">Subtotal (0 items): <span>$0.00</span></div>
            <button class="cart-checkout-btn">Proceed to checkout</button>
            <button class="cart-view-btn">View cart</button>
        </div>
    `;
    
    document.body.appendChild(cartDropdown);
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    document.body.appendChild(overlay);
    
    // Add close event listeners
    cartDropdown.querySelector('.cart-dropdown-close').addEventListener('click', closeCartDropdown);
    overlay.addEventListener('click', closeCartDropdown);
    
    // Add checkout button handler
    cartDropdown.querySelector('.cart-checkout-btn').addEventListener('click', function() {
        alert('Proceeding to checkout...');
        closeCartDropdown();
    });
    
    // Add view cart button handler
    cartDropdown.querySelector('.cart-view-btn').addEventListener('click', function() {
        alert('Viewing full cart...');
        closeCartDropdown();
    });
}

// Toggle cart dropdown display
function toggleCartDropdown() {
    const cartDropdown = document.querySelector('.cart-dropdown');
    const overlay = document.querySelector('.cart-overlay');
    
    if (cartDropdown && overlay) {
        cartDropdown.classList.toggle('active');
        overlay.classList.toggle('active');
        
        if (cartDropdown.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Close cart dropdown
function closeCartDropdown() {
    const cartDropdown = document.querySelector('.cart-dropdown');
    const overlay = document.querySelector('.cart-overlay');
    
    if (cartDropdown && overlay) {
        cartDropdown.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Handle add to cart button clicks
function handleAddToCart(e) {
    e.preventDefault();
    
    // Get product details
    const productElement = e.target.closest('.carousel-item') || e.target.closest('.box');
    if (!productElement) return;
    
    let productName, productPrice, productImage;
    
    if (productElement.classList.contains('carousel-item')) {
        productName = productElement.querySelector('.carousel-item-name').textContent;
        productPrice = productElement.querySelector('.carousel-item-price').textContent;
        productImage = productElement.querySelector('.carousel-item-image').style.backgroundImage.slice(5, -2);
    } else {
        productName = productElement.querySelector('h2').textContent;
        productPrice = '$99.99'; // Default price for category boxes
        productImage = productElement.querySelector('.box-img').style.backgroundImage.slice(5, -2);
    }
    
    // Create product object
    const product = {
        id: Date.now().toString(),
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };
    
    // Add to cart
    addToCart(product);
    
    // Show success animation
    showAddToCartAnimation(productElement);
}

// Add item to cart
function addToCart(product) {
    // Get current cart
    let cart = JSON.parse(localStorage.getItem('amazonCart')) || [];
    
    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    
    if (existingProductIndex > -1) {
        // Update quantity if product exists
        cart[existingProductIndex].quantity += 1;
    } else {
        // Add new product if it doesn't exist
        cart.push(product);
    }
    
    // Save cart to localStorage
    saveCartToStorage(cart);
    
    // Update cart display
    updateCartDisplay();
    
    // Show confirmation
    showAddedToCartConfirmation(product.name);
}

// Save cart to localStorage
function saveCartToStorage(cart) {
    localStorage.setItem('amazonCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    return JSON.parse(localStorage.getItem('amazonCart')) || [];
}

// Update cart count and display
function updateCartDisplay() {
    const cart = loadCartFromStorage();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + (price * item.quantity);
    }, 0).toFixed(2);
    
    // Update cart count in nav
    updateCartCount(cartCount);
    
    // Update cart dropdown if it exists
    const cartDropdown = document.querySelector('.cart-dropdown');
    if (cartDropdown) {
        const emptyMessage = cartDropdown.querySelector('.cart-empty-message');
        const itemsList = cartDropdown.querySelector('.cart-items-list');
        const subtotal = cartDropdown.querySelector('.cart-subtotal');
        
        // Show empty message or items
        if (cart.length === 0) {
            emptyMessage.style.display = 'block';
            itemsList.style.display = 'none';
            subtotal.innerHTML = 'Subtotal (0 items): <span>$0.00</span>';
        } else {
            emptyMessage.style.display = 'none';
            itemsList.style.display = 'block';
            
            // Update items list
            itemsList.innerHTML = '';
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.setAttribute('data-id', item.id);
                
                const itemPrice = parseFloat(item.price.replace('$', ''));
                const itemTotal = (itemPrice * item.quantity).toFixed(2);
                
                itemElement.innerHTML = `
                    <div class="cart-item-image" style="background-image:url('${item.image}')"></div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price} × ${item.quantity}</div>
                        <div class="cart-item-actions">
                            <select class="cart-item-quantity">
                                ${generateQuantityOptions(item.quantity)}
                            </select>
                            <button class="cart-item-delete">Delete</button>
                        </div>
                    </div>
                `;
                
                itemsList.appendChild(itemElement);
                
                // Add event listeners for item actions
                const quantitySelect = itemElement.querySelector('.cart-item-quantity');
                quantitySelect.addEventListener('change', function() {
                    updateItemQuantity(item.id, parseInt(this.value));
                });
                
                const deleteButton = itemElement.querySelector('.cart-item-delete');
                deleteButton.addEventListener('click', function() {
                    removeFromCart(item.id);
                });
            });
            
            // Update subtotal
            subtotal.innerHTML = `Subtotal (${cartCount} item${cartCount !== 1 ? 's' : ''}): <span>$${cartTotal}</span>`;
        }
    }
}

// Generate quantity options for select dropdown
function generateQuantityOptions(currentQuantity) {
    let options = '';
    for (let i = 1; i <= 10; i++) {
        options += `<option value="${i}" ${i === currentQuantity ? 'selected' : ''}>${i}</option>`;
    }
    return options;
}

// Update item quantity in cart
function updateItemQuantity(itemId, quantity) {
    let cart = loadCartFromStorage();
    
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity = quantity;
        saveCartToStorage(cart);
        updateCartDisplay();
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    let cart = loadCartFromStorage();
    
    cart = cart.filter(item => item.id !== itemId);
    saveCartToStorage(cart);
    updateCartDisplay();
}

// Show animation when adding to cart
function showAddToCartAnimation(productElement) {
    // Create floating item
    const floatingItem = document.createElement('div');
    floatingItem.className = 'floating-cart-item';
    
    // Position at product location
    const rect = productElement.getBoundingClientRect();
    floatingItem.style.top = rect.top + 'px';
    floatingItem.style.left = rect.left + 'px';
    floatingItem.style.width = rect.width + 'px';
    floatingItem.style.height = rect.height + 'px';
    
    // Add to body
    document.body.appendChild(floatingItem);
    
    // Get cart location
    const cart = document.querySelector('.nav-cart');
    const cartRect = cart.getBoundingClientRect();
    
    // Animate to cart
    setTimeout(() => {
        floatingItem.style.top = cartRect.top + 'px';
        floatingItem.style.left = cartRect.left + 'px';
        floatingItem.style.width = '20px';
        floatingItem.style.height = '20px';
        floatingItem.style.opacity = '0';
        
        // Remove after animation
        setTimeout(() => {
            floatingItem.remove();
        }, 500);
    }, 10);
}

// Show confirmation when item is added
function showAddedToCartConfirmation(productName) {
    // Create confirmation message
    const confirmation = document.createElement('div');
    confirmation.className = 'cart-confirmation';
    confirmation.innerHTML = `
        <div class="cart-confirmation-message">
            <i class="fa-solid fa-circle-check"></i>
            <span>${productName} has been added to your cart</span>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(confirmation);
    
    // Show and then hide
    setTimeout(() => {
        confirmation.classList.add('active');
        
        setTimeout(() => {
            confirmation.classList.remove('active');
            
            // Remove after animation
            setTimeout(() => {
                confirmation.remove();
            }, 300);
        }, 3000);
    }, 10);
}

// Update cart count
function updateCartCount(count) {
    const cartText = document.querySelector('.nav-cart');
    if (cartText) {
        // Get current count if it exists
        const countSpan = cartText.querySelector('.cart-count');
        
        if (countSpan) {
            if (count > 0) {
                countSpan.textContent = count;
            } else {
                countSpan.remove();
            }
        } else if (count > 0) {
            // Create count element if it doesn't exist
            const newCount = document.createElement('span');
            newCount.className = 'cart-count';
            newCount.textContent = count;
            cartText.appendChild(newCount);
        }
    }
}

// Responsive layout adjustments
function handleResponsiveLayout() {
    const width = window.innerWidth;
    
    // Adjust shop section based on width
    const boxes = document.querySelectorAll('.box');
    
    if (width <= 480) {
        // Small mobile
        boxes.forEach(box => {
            box.style.width = '100%';
        });
    } else if (width <= 768) {
        // Mobile/tablet
        boxes.forEach(box => {
            box.style.width = '45%';
        });
    } else if (width <= 992) {
        // Tablet/small laptop
        boxes.forEach(box => {
            box.style.width = '30%';
        });
    } else {
        // Desktop
        boxes.forEach(box => {
            box.style.width = '23%';
        });
    }
    
    // Adjust carousel items
    const carouselItems = document.querySelector('.carousel-items');
    if (carouselItems) {
        const items = carouselItems.querySelectorAll('.carousel-item');
        const itemWidth = width <= 480 ? 100 : (width <= 768 ? 50 : (width <= 992 ? 33.33 : 25));
        items.forEach(item => {
            item.style.width = `${itemWidth}%`;
        });
    }
} 