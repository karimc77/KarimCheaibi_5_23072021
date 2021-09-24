const urlSite = location.hostname;
console.log(urlSite);

// Recuperation des paramètres Location pour récuperer l'id produit
let params = new URL(document.location).searchParams;
let id = params.get("id");

// Test pour voir si l'id est manquant
if(!!id === false) {
  console.error("l' id est manquant");
}

let urlApi = `http://localhost:3000/api/teddies/${id}`;

if(urlSite.includes('github')) {
   urlApi = "data/teddy.json";
}

// Déclaration des variables pour recuperer les données et les afficher sur la page 

const productImg = document.querySelector(".img");
const productName = document.querySelector(".productInfosName");
const productDesc = document.querySelector(".productInfosDesc");
const productPrice = document.querySelector(".productInfosPrice");
const nounoursNum = document.querySelector("#nounoursNum");
const colorSelect = document.querySelector("#colorSelect");

console.log(nounoursNum);

main();

// Création des fonctions :

function main() {
  getArticles();
  ajoutPanier();
}

// getArticles (pour recuperer les articles avec l'id)
// On récupère le produit selectionné avec l' id dans la requete
// On place les données reçues via l'API aux bons endroits sur la page
// Affichage du prix en euros
// Récuperation des couleurs de chaque peluche

function getArticles() {

  fetch(urlApi)
    .then(function (response) {
      return response.json();
    })    
    .then(function (Apiresult) {

if( Array.isArray(Apiresult)) {
  product = Apiresult.find( result => result._id === id);
} else {
  product = Apiresult;
}
console.log(product);

      productName.innerHTML = product.name;
      productImg.src = product.imageUrl;
      productDesc.innerText = product.description;

      product.price = product.price / 100;
      productPrice.innerText = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(product.price);

      let colorSelect = document.getElementById("colorSelect");
      for (let i = 0; i < product.colors.length; i++) {
        let option = document.createElement("option");
        option.innerText = product.colors[i];
        colorSelect.appendChild(option);
      }
    });
}

// ajoutPanier (pour ajouter dans le panier a l'aide du LocalStorage)
// Création du produit qui sera ajouté au panier
// Gestion du localStorage, création d'un tableau
// Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau panierproducts,
// puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
// Si le LocalStorage est vide, on le crée avec le produit ajouté
// Effets visuels lors d'un ajout au panier

function ajoutPanier() {
  const ajoutPanier = document.querySelector(".ajoutpanier");
  const confirmPanier = document.querySelector(".ajoutPanierconfirm");
  const confirm = document.querySelector(".confirm");
 
  
  console.log(nounoursNum);


let ajoutproduit = {};

  ajoutPanier.addEventListener("click", () => {
    if (nounoursNum.value > 0) {

      ajoutproduit = {
        name: productName.innerHTML,
        price: parseFloat(productPrice.innerHTML),
        color: document.querySelector("#colorSelect").value,
        quantity: parseFloat(document.querySelector("#nounoursNum").value),
        _id: id,
      };


let panierproducts = [];

if (localStorage.getItem("products") !== null) {
  panierproducts = JSON.parse(localStorage.getItem("products"));
}


console.log("blalalal",ajoutproduit);

panierproducts.push(ajoutproduit);
localStorage.setItem("products", JSON.stringify(panierproducts));


confirmPanier.style.visibility = "visible";
confirm.innerHTML = `Vous avez ajouté ${nounoursNum.value} nounours à votre panier !`;
setTimeout("location.reload(true);", 4000);
} else {
confirmPanier.style.visibility = "visible";
confirm.style.background = "red";
confirm.style.border = "red";
confirm.style.color = "white";
confirm.style.whiteSpace = "normal";
confirm.innerText = `La quantité doit être comprise entre 1 et 99,.`;
  }
});
}