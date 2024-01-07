import axios from "axios"

async function getData(user) {
  const response = await axios.get(`https://api.github.com/users/${user}`)
  const userData = await response.data
  const userProfileImage = await userData.avatar_url
  const userName = await userData.name
  const userBio = await userData.bio

  document.querySelector("#user-image").src = userProfileImage
  document.querySelector("#user-name").innerText = userName
  document.querySelector("#user-bio").innerText = userBio
}

getData("joaonpx").catch((err) => console.log(err))
