document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.querySelector(".icons .fa-shopping-cart");
  const shoppingCart = document.querySelector(".shopping-cart");
  const cartCountEl = document.getElementById("cart-count");
  let count = 0;

  // Toggle sidebar
  cartIcon.addEventListener("click", (e) => {
      e.preventDefault();
      shoppingCart.classList.toggle("active");
  });

  // Handle delete functionality using event delegation
  shoppingCart.addEventListener('click', (e) => {
      if (e.target.classList.contains('hapus') || e.target.closest('.hapus')) {
          const cartItem = e.target.closest('.cart-item');
          if (cartItem) {
              cartItem.remove();
              count--;
              if (count < 0) count = 0;
              updateCartCount();
          }
      }
  });

  // Function to update cart count
  function updateCartCount() {
      cartCountEl.textContent = count;
  }

  // Make count and updateCartCount available globally
  window.updateCartCount = updateCartCount;
  window.cartCount = {
      increment: () => {
          count++;
          updateCartCount();
      },
      decrement: () => {
          count--;
          if (count < 0) count = 0;
          updateCartCount();
      }
  };
});