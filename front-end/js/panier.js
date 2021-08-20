let panier = document.querySelector(".recuppanier"); //cart-card__recap
const product = localStorage.getItem("products");
const countproduct = JSON.parse(product);

// let cart = document.querySelector(".cart-card__recap"); //"recuppanier"
// let copyOfLS = JSON.parse(localStorage.getItem("products"));

console.log("count",product,countproduct);


main();

// Création des fonctions :

function main() {
  affichepanier(); //displaycart
  totalpanier(); //countTotalInCart
  viderpanier(); //toEmptyCart
  //formulaire(); //checkFormAndPostRequest
}

// Création affichepanier :

function affichepanier() {
    let testPanierVide = document.querySelector(".paniervide"); //width-to-empty-cart
    let cardPanier = document.querySelector(".cardpanier");       //cart-card
    let panierVide = document.querySelector(".sipaniervide"); //if-empty-cart
  
// Si le localStorage contient un article,
// on affiche le panier et on supprime le message "panier vide"

    if (product) {
        cardPanier.style.display = "flex";
        cardPanier.style.flexDirection = "column";
        cardPanier.style.justifyContent = "space-around";
        panierVide.style.display = "none";
    }
  
// Pour chaque article dans le localStorage,
// on crée des divs pour afficher le panier et recuperer les données du tableau

    for (let produit in countproduct) { //copyOfLS
      let productRow = document.createElement("div");
      panier.insertBefore(productRow, testPanierVide);
      productRow.classList.add("recuppanierrow", "productrow"); //cart-card__recap__row, ajout productrow
  
      let productName = document.createElement("div");
      productRow.appendChild(productName);
      productName.classList.add("recuppaniername"); //cart-card__recap__title
      productName.innerHTML = countproduct[produit].name;
  
      let productQuantity = document.createElement("div");
      productRow.appendChild(productQuantity);
      productQuantity.classList.add("recuppaniername", "quantity"); //cart-card__recap__title, title-quantity
      productQuantity.innerHTML = countproduct[produit].quantity;
  
      let productPrice = document.createElement("div");
      productRow.appendChild(productPrice);
      productPrice.classList.add("recuppaniername", "price", "price"); //"recuppaniername", data-price, pourquoi a tester !!
  
// Affichage et calcul du prix en euros

      productPrice.innerHTML = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(countproduct[produit].price * countproduct[produit].quantity);
    }
  }

// ------------------------- FIN AFFICHEPANIER --------------------------

// Création totalpanier :

function totalpanier() {
    let tableauPrix = []; //arrayOfPrice
    let totalPrice = document.querySelector(".total");
  
// On push chaque prix du DOM dans un tableau

    let priceQuantity = document.querySelectorAll(".price"); // productPriceAccordingToQuantity
    for (let price in priceQuantity) {
        tableauPrix.push(priceQuantity[price].innerHTML);
    }
  
// On enlève les undefined du tableau

    tableauPrix = tableauPrix.filter((e) => {
      return e != undefined;
    });
  
// Convertir le tableau en chiffres

    tableauPrix = tableauPrix.map((x) => parseFloat(x));
  
// Somme du tableau pour prix total

    const reducer = (acc, currentVal) => acc + currentVal;
    tableauPrix = tableauPrix.reduce(reducer);
  
// Affichage du prix formaté en euros

    totalPrice.innerText = `Total : ${(tableauPrix = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    }).format(tableauPrix))}`;
  }
    
// ------------------------- FIN TOTALPANIER --------------------------

// Création viderpanier :

function viderpanier() {

// Lors du clic sur le btn : Nettoyage panier et localStorage

const viderPanierBtn = document.querySelector(".verspaniervide");    //buttonToEmptyCart, to-empty-cart
    viderPanierBtn.addEventListener("click", () => {
    localStorage.clear();
    });
}

// ------------------------- FIN VIDERPANIER --------------------------

// Création formulaire :



// ------------------------- FIN FORMULAIRE --------------------------




// Faire le calcul du panier , recuperer la valeur de nounoursnum

// Vider le panier entierement ou par article

// Faire le fetch post une fois la commande validée 




