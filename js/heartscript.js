document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.querySelector("#heart-icon");
  const heartCart = document.querySelector(".heart-cart");
  const addBtns = document.querySelectorAll(".add-to-heart");
  const heartCountEl = document.getElementById("heart-count");
  let count = 0;

  console.log(
    "DOM siap, tombol addToCart:",
    addBtns.length,
    "ikon cart:",
    cartIcon
  );

  // 1) toggle sidebar
  cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Icon cart diklik – toggle active");
    heartCart.classList.toggle("active");
  });

  // 2) add-to-cart
  addBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("add-to-heart diklik", btn);

      const box = btn.closest(".box");
      const img = box.querySelector("img").src;
      const title = box.querySelector("h3").innerText;
      const price = box.querySelector(".Harga").innerText;

      const item = document.createElement("div");
      item.classList.add("cart-item");
      item.innerHTML = `
          <img src="${img}" alt="${title}">
          <div class="harga">
            <h3>${title}</h3>
            <div class="harga">${price}</div>
            </div>
          <i data-feather="trash-2" class="hapus"></i>
        `;
      heartCart.appendChild(item);
      feather.replace();

      
      item.querySelector(".hapus").addEventListener("click", () => {
        item.remove();
        count--;
        if (count < 0) count = 0;
        console.log("Count saat ini setelah penghapusan:", count);
        heartCountEl.textContent = count;
      });

      count++; 
      console.log("Count saat ini setelah penambahan:", count);
      heartCountEl.textContent = count;
    });
  });
});
