let products = JSON.parse(localStorage.getItem("products"));
let totalPrice = localStorage.getItem("totalPrice");
let id = localStorage.getItem("orderIdResponse");

if (!id) {
  document.querySelector(".no-commande").classList.add("is-visible");
  document.querySelector(".index-produits").classList.add("is-not-visible");
} else {
  document.querySelector(".com-number").textContent = `${id} `;

  document.querySelector(".confirm-price").textContent = `${totalPrice}`;

  localStorage.clear();
}
