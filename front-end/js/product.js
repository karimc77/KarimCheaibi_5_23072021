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


fetch(urlApi)
  .then((response) => response.json())
  .then((data) => {
    
if( urlSite.includes('github')) {
  data = data.filter( teddy => teddy.id === id)[0];
}

    console.log(data);

    const card = document.querySelector("#article");
    let cards = "";

        cards+= `<div>
                    <h1 class="row">${data.name}</h1>
                    <p class="row"><img src="${data.imageUrl}" alt="image d'ours en détails"/></p>
                    <p class="row">${data.description}</p>
                    <p class="row">Prix: ${(data.price/100).toFixed(2).replace(".",",")}€</p>

                    <div class="quantity">
                      <label for="nounoursNum">Quantité :</label>
                      <input id="nounoursNum" type="number" name="nounoursNum" value="1" min="1">
                    </div>

        <!-- Personalisation de la couleur -->
                    <div class="product-card__infos__color">
                      <label for="colorSelect">Couleur :</label>
                      <select name="color" id="colorSelect"></select>
                    </div>



        
                    <button class="ajoutPanier">Ajouter au panier</button>
                </div>`;


        //             <label for="select__color">
        //             <h3>Personnaliser votre ours</h3>
        //             </label>
        //             <select id="${data.colors}">
        // <!-- Mes choix de couleurs --!>
        //             </select>




    
        


    console.log(cards);
    card.innerHTML = cards;
  });



  let colorSelect = document.getElementById("colorSelect");
    for (let i = 0; i < article.colors.length; i++) {
           let option = document.createElement("option");
           option.innerText = article.colors[i];
           colorSelect.appendChild(option);
  }
//creer une fonction sur le bouton ajouter panier qui prend en parametre l'id

//stocker ce produit dans le panier avec local storage

//dans panier.js on utiliser localstorage.getItem