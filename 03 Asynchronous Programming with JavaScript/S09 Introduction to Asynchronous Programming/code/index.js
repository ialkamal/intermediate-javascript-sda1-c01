function getUsers() {
  return fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => {
      return fetch(`https://reqres.in/api/users/${res[0].id}`)
        .then((res) => res.json())
        .then((res) => res.data);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Final block to execute"));
}

getUsers().then((res) => console.log(res));
