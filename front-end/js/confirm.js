/**
 * Afficher le retour de la commande
 * @function DisplayRecept
 * @return void 
 */

let products = JSON.parse(localStorage.getItem("products"));
let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
let id = localStorage.getItem("orderIdResponse");


document.querySelector(".comnumber").textContent = `${id} `;

document.querySelector(".confirmprice").textContent = `${totalPrice}€`;

const DisplayRecept = () => {
  localStorage.removeItem(products);
}

DisplayRecept("totalPrice");
DisplayRecept("products");
DisplayRecept("orderIdResponse");

// -----------------------------------------------------------------------------
