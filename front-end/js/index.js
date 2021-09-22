const urlApi = manageEnvironment("api/teddies")

requestApi(urlApi).then((data) => {
    const card = document.querySelector(".products");
    const createTpl = createTpl(data);
    card.innerHTML = createTpl;
});