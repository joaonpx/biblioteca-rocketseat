async function fetchRepos() {
  try {
    const user = await axios.get(`https://api.github.com/users/joaonpx`)
    const repos = await axios.get(user.data.repos_url)

    console.log(repos.data)
  } catch (err) {
    console.log(err)
  }
}

fetchRepos()
