fetch("http://localhost:3000/api/teddies")
  .then((response) => response.json())
  .then((data) => {
    const card = document.querySelector(".peluche");
    let cards = "";
    for (const product of data) {
      cards += `<div class="peluche" id="${product._id}">
                    <img src="${product.imageUrl}" alt=""/> 
                    <article class="alignprice">
                      <h2>${product.name}</h2> 
                      <h3>${product.price}</h3>
                    </article>
                </div>;`;
    }
    console.log(cards);
    card.innerHTML = cards;
  });

//   cards.style.background ="pink";