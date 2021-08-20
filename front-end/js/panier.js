let panier = document.querySelector(".recuppanier");
const product = localStorage.getItem("products");
const countproduct = JSON.parse(product);

console.log("count",product,countproduct);


main();

// Création des fonctions :

function main() {
  affichepanier(); 
  totalpanier(); 
  viderpanier(); 
  //formulaire(); 
}

// Création affichepanier :

function affichepanier() {
    let testPanierVide = document.querySelector(".paniervide"); 
    let cardPanier = document.querySelector(".cardpanier");       
    let panierVide = document.querySelector(".sipaniervide"); 
  
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

    for (let produit in countproduct) { 
      let productRow = document.createElement("div");
      panier.insertBefore(productRow, testPanierVide);
      productRow.classList.add("recuppanierrow", "productrow"); 
  
      let productName = document.createElement("div");
      productRow.appendChild(productName);
      productName.classList.add("recuppaniername"); 
      productName.innerHTML = countproduct[produit].name;
  
      let productQuantity = document.createElement("div");
      productRow.appendChild(productQuantity);
      productQuantity.classList.add("recuppaniername", "quantity"); 
      productQuantity.innerHTML = countproduct[produit].quantity;
  
      let productPrice = document.createElement("div");
      productRow.appendChild(productPrice);
      productPrice.classList.add("recuppaniername", "price", "price"); 
  
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
    let tableauPrix = []; 
    let totalPrice = document.querySelector(".total");
  
// On push chaque prix du DOM dans un tableau

    let priceQuantity = document.querySelectorAll(".price"); 
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

const viderPanierBtn = document.querySelector(".verspaniervide");    
    viderPanierBtn.addEventListener("click", () => {
    localStorage.clear();
    });
}

// ------------------------- FIN VIDERPANIER --------------------------

// Création formulaire avec fetch post pour valider commande:



// ------------------------- FIN FORMULAIRE --------------------------




// Faire le calcul du panier , recuperer la valeur de nounoursnum

// Vider le panier entierement ou par article

// Faire le fetch post une fois la commande validée 




