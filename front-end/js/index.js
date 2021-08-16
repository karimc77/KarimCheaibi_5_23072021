const urlSite = location.hostname;
console.log(urlSite);
let urlApi = "http://localhost:3000/api/teddies";

if(urlSite.includes('github')) {
  urlApi = "data/teddy.json";
}

// let imageUrl = product.imageUrl;
// if(urlSite.includes('github')) {
//   imageUrl = images/${product.imageUrl};
// }

fetch(urlApi)
  .then((response) => response.json())
  .then((data) => {
    const card = document.querySelector(".peluche");
    let cards = "";
    for (const product of data) {
      cards += `<div class="peluche" id="${product._id}">
                    <img src="${product.imageUrl}" alt=""/>
                    <article class="alignprice">
                      <h2>${product.name}</h2> 
                      <h3>${(product.price/100).toFixed(2).replace(".",",")}€</h3>
                      <a class="product" href="product.html?id=${product._id}">Acheter ce produit</a>
                    </article>
                </div>`;
    }
    console.log(cards);
    card.innerHTML = cards;
  });