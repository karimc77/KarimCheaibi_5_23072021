fetch('http://localhost:3000/api/teddies')
    .then((response) => response.json())
    .then((data) => {
        const card = document.querySelector('.peluche');

        for (const product of data) {
            card.innerHTML +=
      <div class="peluche" id="${product._id}">
        <img src="${product.imageUrl}" alt=""/> //${product.imageUrl} backend/models/teddy/js
            <article class="alignprice">
                <h2>${product.name}</h2> // idem recuperer le nom dans  backend/models/teddy.js
                <h3>${product.price}</h3>     // recuperer le prix dans  backend/models/teddy.js
            </article>
      </div>;
        }
    });

    console.log(card);