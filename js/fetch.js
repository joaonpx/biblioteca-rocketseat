fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => {
    response
      .json()
      .then((data) => {
        let imgUrl = data[0].url

        document.querySelector("#cat-img").src = imgUrl
      })
      .catch((error) => console.log(error))
  })
  .catch((error) => console.log(error))
