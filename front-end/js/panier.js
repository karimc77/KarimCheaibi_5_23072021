const panier = document.querySelector(".recuppanier");
const totalPrice = document.querySelector(".total");
const deleteBtnBasket = document.querySelector(".verspaniervide");
const products = JSON.parse(localStorage.getItem("products"));
console.log("count", products);

// A la fin du chargement du Dom, on lance toutes les fonctions
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    main();
});

/**
 * Utilisation des arrow function : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * @function main
 * @returns void
 */
const main = () => {
    displayBaskets(products);
    totalBasketQuantity(products);
    updateBasket();
    deleteBasket();
    form();
    confirm();
}

/**
 * Affichage des items du panier
 * @function displayBaskets
 * @param products
 * @retuns void
 */
const displayBaskets = (products) => {
    let cardPanier = document.querySelector(".cardpanier");
    let panierVide = document.querySelector(".sipaniervide");

    if (products.length > 0) {
        cardPanier.style.display = "flex";
        cardPanier.style.flexDirection = "column";
        cardPanier.style.justifyContent = "space-around";
        panierVide.style.display = "none";
    }

    let basketItem = "";
    for (const product of products) {
        basketItem += `<div class="recuppanierrow">
                      <div class="recuppaniername row">Nom: ${product.name}</div>
                      <div class="recuppaniername quantity row">Quantité: ${product.quantity}</div>                      
                      <div class="recuppaniername price row">Prix: ${formatPrice(calculateProductItem(product))}</div>
                      <div class="cleararticle" data-id="${product._id}">
                        <i class="fas fa-trash"></i>
                      </div>
                      </div>                                        
                      `;
    }
    document.querySelector(".recuppanier").innerHTML = basketItem;
}

/**
 * Formate le prix en euros
 * @function formatPrice
 * @param price
 * @returns {string}
 */
const formatPrice = (price) => {
    if(isNaN(price)) {
        console.error("Un type number est attendu !");
        return;
    }
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
    }).format(price);
}

/**
 * Calcul le prix en fonction de la quantité pour un item
 * @function calculateProductItem
 * @param item: product
 * @returns {number}
 */
const calculateProductItem = (item) => {
    if( !item || !item?.price && !item?.quantity ) {
        console.error("Cette objet n'est pas valide");
        return;
    }
    return item.price * item.quantity;
}

/**
 * Calcul le prix total en fonction de la quantité des items
 * @function totalBasketQuantity
 * @param products
 * @retuns void
 */
const totalBasketQuantity = (products) => {
    if( products.length === 0 ) {
        console.error("Le panier semble vide!");
        return;
    }
    const priceArray = products
        .map(product => calculateProductItem(product))
        .reduce((acc, currentVal) => acc + currentVal);
    totalPrice.innerText = `Total : ${formatPrice(priceArray)}`;
}

/**
 * Suppression d'un article par son id
 * @function deleteArticle
 * @param id
 * @returns void
 */
const deleteArticle = (id) => {
    if(!id) {
        console.error("L'id est vide. Impossible de supprimer");
        return;
    }
    const productFiltered = products.filter((el) => el._id !== id);
    localStorage.setItem('products', JSON.stringify(productFiltered));
    location.reload();
}

/**
 * Permet d'update le panier après une suppression
 * @function updateBasket
 * @return void
 */
const updateBasket = () => {
    const deleteBtnArticle = document.querySelector(".cleararticle");
    if( !deleteBtnArticle ) {
        console.error("Le button 'cleararticle' n'existe pas");
        return;
    }
    deleteBtnArticle.addEventListener('click', (event) => {
        event.preventDefault();
        const id = document.querySelector(".cleararticle").getAttribute('data-id');
        deleteArticle(id);
    })
}

/**
 * Suppression dun panier
 * @function deleteBasket
 * @returns void
 */
const deleteBasket = () => {
    deleteBtnBasket.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem("products");
        window.location.href = "panier.html";
    });
}


/**
 * Création Formulaire Commande
 * @function form
 * @returns void 
 */

const form = () => {
  if (products == 0) {
    console.log("merci de remplir votre panier");
    const form = document.querySelector(".panierform");
    form.style.opacity = "0";
  } else {
    const form = document.querySelector(".panierform");
    let forms = "";
    forms += `<form class="form">
    <div class="name-and-lastname">
        <div class="panierformrow" id="nameproduct">
            <label for="name">Prénom :</label>
            <input type="text" placeholder="Prénom" id="name" name="username" required> 
        </div>
  
        <div class="panierformrow" id="lastnameproduct">
            <label for="lastname">Nom :</label>
            <input type="text" placeholder="Nom" id="lastname" name="userlastname" required>
        </div>
    </div>       
    <div class="postal-and-city">
        <div class="panierformrow" id="adressproduct">
            <label for="adress">Adresse :</label>
            <input type="text" placeholder="Adresse de livraison" id="adress" name="useradress" required>
        </div>
  
        <div class="panierformrow" id="cityproduct">
            <label for="city">Ville :</label>
            <input type="text" placeholder="Ville" id="city" name="usercity" required>
        </div>
        
        <div class="panierformrow" id="postalproduct">
            <label for="postal">Code postal :</label>
            <input type="text" placeholder="Code postal" id="postal" name="userpostal" required>
        </div>                       
    </div>
        <div class="panierformrow" id="mailproduct">
            <label for="mail">Adresse mail :</label>
            <input type="email" placeholder="Adresse mail" id="mail" name="usermail" required>
        </div>
  
        <div class="panierformrow" id="phoneproduct">
            <label for="phone" >Numéro de téléphone :</label>
            <input type="tel" placeholder="Numéro de téléphone" id="phone" name="phone" required >
        </div>  
        `;
  
  document.querySelector(".panierform").innerHTML = forms;
  }
}








 



