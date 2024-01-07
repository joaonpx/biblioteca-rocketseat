const https = require("https")
const API = "https://api.thecatapi.com/v1/images/search"

https.get(API, (res) => {
  console.log(res.statusCode)
})

console.log("CONECTANDO API")

function timer(seconds) {
  console.log(`Iniciando timer de ${seconds} segundos`)

  let time = seconds * 1000

  setTimeout(() => {
    console.log("Timer finalizado!")
  }, time)
}

timer(10)
