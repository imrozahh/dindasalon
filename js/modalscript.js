document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".cart-btn");
    const modals = document.querySelectorAll(".modal");
    const closeModalButtons = document.querySelectorAll(".close-modal");
    let selectedBox = null;

    // Add to cart click handler
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            selectedBox = button.closest('.box');
            
            // Check if this product has a modal
            const modalId = button.dataset.modal;
            if (modalId) {
                // Show modal for products with price options
                const modal = document.getElementById(modalId);
                modal.style.display = "flex";
            } else {
                // Direct add to cart for single-price products
                const productName = selectedBox.querySelector("h3").innerText;
                const productImage = selectedBox.querySelector("img").src;
                const price = selectedBox.querySelector(".Harga").innerText;
                
                addToCart(productName, productImage, price.replace("Rp ", "").replace(",-", ""));
                // Increment cart count
                if (window.cartCount) {
                    window.cartCount.increment();
                }
            }
        });
    });

    // Price button click handler
    document.querySelectorAll(".price-btn").forEach(button => {
        button.addEventListener("click", () => {
            const price = button.dataset.price;
            const productName = selectedBox.querySelector("h3").innerText;
            const productImage = selectedBox.querySelector("img").src;
            
            addToCart(productName, productImage, price);
            button.closest(".modal").style.display = "none";
            
            // Increment cart count
            if (window.cartCount) {
                window.cartCount.increment();
            }
        });
    });

    function addToCart(name, image, price) {
        const item = document.createElement("div");
        item.classList.add("cart-item");
        item.innerHTML = `
            <img src="${image}" alt="${name}">
            <div class="item-info">
                <h3>${name}</h3>
                <div class="harga">Rp ${price}</div>
            </div>
            <i data-feather="trash-2" class="hapus"></i>
        `;

        document.querySelector(".shopping-cart").appendChild(item);
        
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    // Close modal buttons
    closeModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").style.display = "none";
        });
    });

    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });
});