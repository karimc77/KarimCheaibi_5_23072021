const urlSite = location.hostname;
console.log(urlSite);
let urlApi = "http://localhost:3000/api/teddies";

if(urlSite.includes('github')) {
  urlApi = "../data/teddy.json";
}

fetch(urlApi)
  .then((response) => response.json())
  .then((data) => {
    const card = document.querySelector("#article");
    let cards = "";

        cards+= `<div>
                    <h1 class="row">${card.name}</h1>
                    <p class="row"><img src="${card.imageUrl}" alt="image d'ours en détails"/></p>
                    <p class="row">${card.description}</p>
                    <p class="row">Prix: ${(card.price/100).toFixed(2).replace(".",",")}€</p>
        <!-- Personalisation de la couleur -->
                    <label for="select__color">
                    <h3>Personnaliser votre ours</h3>
                    </label>
                    <select id="${card.colors}">
        <!-- Mes choix de couleurs --!>
                    </select>
                    <button class="ajoutPanier">Ajouter au panier</button>
                </div>`;
                
    console.log(cards);
    card.innerHTML = cards;
  });