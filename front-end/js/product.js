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
const nounoursNum = document.querySelector("#nounourNum");
const colorSelect = document.querySelector("#colorSelect");

main();

function main() {
  getArticles();
  //addToCart();
}

function getArticles() {

// On récupère le produit selectionné avec l' id dans la requete

  fetch(urlApi)
    .then(function (response) {
      return response.json();
    })    
    .then(function (Apiresult) {

// On place les données reçues via l'API aux bons endroits sur la page

if( Array.isArray(Apiresult)) {
  product = Apiresult.find( result => result._id === id);
} else {
  product = Apiresult;
}
console.log(product);

      productName.innerHTML = product.name;
      productImg.src = product.imageUrl;
      productDesc.innerText = product.description;

// Formatage du prix pour l'afficher en euros

      product.price = product.price / 100;
      productPrice.innerText = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(product.price);

// Récuperation des couleurs de chaque peluche

      let colorSelect = document.getElementById("colorSelect");
      for (let i = 0; i < product.colors.length; i++) {
        let option = document.createElement("option");
        option.innerText = product.colors[i];
        colorSelect.appendChild(option);
      }
    });
}


// // ----------------- Gestion du localStorage
// let arrayProductsInCart = [];
      
// // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
// if (localStorage.getItem("products") !== null) {
//   arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
  
  
//   // Si le LS est vide, on le crée avec le produit ajouté
// } 
//   arrayProductsInCart.push(pelucheAjout);
//   localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
  
  
//creer une fonction sur le bouton ajouter panier qui prend en parametre l'id

//stocker ce produit dans le panier avec local storage

//dans panier.js on utiliser localstorage.getItem