fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => {
    response
      .json()
      .then((data) => {
        let imgUrl = data[0].url

        // document.querySelector("#cat-img").src = imgUrl

        console.log("gato atualizado")
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("finalizando"))
  })
  .catch((error) => console.log(error))
