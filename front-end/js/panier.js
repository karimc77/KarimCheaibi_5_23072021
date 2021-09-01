let panier = document.querySelector(".recuppanier");
const product = localStorage.getItem("products");
const products = JSON.parse(product);

console.log("count",product,products);


main();

// Création des fonctions :

function main() {
  affichepanier();
  totalpanier(products);
  cleararticle(); 
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

    // for (let produit in products) { 
    //   let productRow = document.createElement("div");
    //   panier.insertBefore(productRow, testPanierVide);
    //   productRow.classList.add("recuppanierrow", "productrow"); 
  
    //   let productName = document.createElement("div");
    //   productRow.appendChild(productName);
    //   productName.classList.add("recuppaniername"); 
    //   productName.innerHTML = products[produit].name;
  
    //   let productQuantity = document.createElement("div");
    //   productRow.appendChild(productQuantity);
    //   productQuantity.classList.add("recuppaniername", "quantity"); 
    //   productQuantity.innerHTML = products[produit].quantity;
  
    //   let productPrice = document.createElement("div");
    //   productRow.appendChild(productPrice);
    //   productPrice.classList.add("recuppaniername", "price");

    //   let clearArticle = document.createElement("i");
    //   clearArticle.setAttribute("data-id", produit._id)
    //   clearArticle.classList.add("fas","fa-trash");
    //   productRow.appendChild(clearArticle);

    
        const panier = document.querySelector(".recuppanier");
        let   paniers = "";
        for (const product of data) {
          panier += `<div class="recuppanierrow">
                      <div class="recuppaniername row">Nom: ${product.name}</div>
                      <div class="recuppaniername quantity row">Quantité: ${product.quantity}</div>
                      <div class="recuppaniername price row">Prix: ${calculProductItem(product)} </div>
                      <div class="cleararticle">
                        <i class="fas fa-trash" onclick="cleararticle(${product._id})"></i>
                      </div>
                    </div>`;
        }
          panier.innerHTML = paniers;
          
  
// Affichage et calcul du prix en euros

        productPrice.innerHTML = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        }).format(products[produit].price * products[produit].quantity);
}


// ------------------------- FIN AFFICHEPANIER --------------------------

// Création calculProductItem (pour calculer par ligne de produit): 

function calculProductItem(item) {
  return item.price * item.quantity;	
}

// ------------------------- FIN CALCULPRODUCTITEM --------------------------

// Création totalpanier (pour faire le total du panier + conversion en euros):

// Somme du tableau pour prix total (reduce)
// Affichage du prix formaté en euros (format)

function totalpanier(products) {
  let tableauPrix = []; 
  let totalPrice = document.querySelector(".total");

      tableauPrix = products.map( product => calculProductItem(product));

  const total = tableauPrix.reduce((acc, currentVal) => acc + currentVal);

        console.log("ici", total);

        totalPrice.innerText = `Total : ${(new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        }).format(total))}`;
}
    
// ------------------------- FIN TOTALPANIER --------------------------


// Création cleararticle :

//document.querySelector(".cleararticle").addEventListener("click", cleararticle); A supprimer
console.log("ici", document.querySelector(".cleararticle"));

function cleararticle(id) {
  //const id = document.querySelector(".cleararticle").getAttribute("data-id"); A supprimer
  
  
  const clearArticle = products.filter( (el) => el.id !== id);
        localStorage.setItem('products', JSON.stringify(clearArticle));
        window.location.href = "panier.html";
}

// ------------------------- FIN CLEARARTICLE --------------------------

// Création viderpanier :

// Lors du clic sur le btn : Nettoyage panier et localStorage

function viderpanier() {
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




