import axios from "axios"

axios.get("https://api.github.com/users/joaonpx").then((res) => {
  console.log(res.data.bio)
})
