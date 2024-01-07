fetch("https://api.github.com/users/joaonpx")
  .then((response) => response.json())
  .then((data) => fetch(data.repos_url))
  .then((res) => res.json())
  .then((repo_data) => {
    console.log(repo_data)
  })
