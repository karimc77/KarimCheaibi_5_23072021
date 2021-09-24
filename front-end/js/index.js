document.addEventListener('DOMContentLoaded', function () {
  try {
    const urlApi = manageEnvironment("api/teddies")

    requestApi(urlApi).then((data) => {
    const card = document.querySelector(".products");
    const template = createTpl(data);
    card.innerHTML = template;
    })
  } catch(error) {
    console.log("debug")
    console.log(error)
  }  
});