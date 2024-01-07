import axios from "axios"

Promise.all([
  axios.get("https://api.github.com/users/joaonpx"),
  axios.get("https://api.github.com/users/joaonpx/repos"),
]).then((responses) => {
  console.log(responses[0].data.login)
  console.log(responses[1].data[1].name)
})
