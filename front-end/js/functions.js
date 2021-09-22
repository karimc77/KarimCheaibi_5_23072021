const manageEnvironment = (endpoints) => {
    if(!endpoints){
      console.error("no endpoints");
      return;
    }
    let urlBaseApi = "http://localhost:3000/${endpoints}";
    const urlSite = location.hostname;
    if(urlSite.includes('github')) {
        urlBaseApi = "data/teddy.json";
    }
    return urlBaseApi;
}

const requestApi = async(urlApi) => {
    return await fetch(urlApi).then( (response) => response.json());
  }

const createTpl = (products) => {
    if( !products ) {
      console.error("not found");
      return;
    }
    let productTpl = '';
    for(const product of products) {
      productTpl += `<div class="productsproduits" id="${product._id}">
                      <img src="${product.imageUrl}" alt=""/>
                      <article class="alignprice">
                        <h2>${product.name}</h2> 
                        <h3>${(product.price/100).toFixed(2).replace(".",",")}€</h3>
                        <a class="btn" href="product.html?id=${product._id}">Acheter ce produit</a>
                      </article>
                  </div>`;
    }
    return productTpl;
  }