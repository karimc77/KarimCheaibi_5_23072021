/**
 * Afficher le retour de la commande
 * @function DisplayRecept
 * @return void 
 */

let products = JSON.parse(localStorage.getItem("products"));
let totalPrice = localStorage.getItem("totalPrice");
let id = localStorage.getItem("orderIdResponse");

if (!id) {
    document.querySelector(".no-commande").classList.add("is-visible");
    document.querySelector(".index-produits").classList.add("is-not-visible");
}else {
    document.querySelector(".com-number").textContent = `${id} `;

    document.querySelector(".confirm-price").textContent = `${totalPrice}`;

    const DisplayRecept = () => {
        localStorage.removeItem("products");
        localStorage.removeItem("totalPrice");
        localStorage.removeItem("orderIdResponse");
    }

DisplayRecept();
}