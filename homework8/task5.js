const options = {
  method: "GET",
  url: "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
  headers: {
    accept: "application/json",
    "X-RapidAPI-Key": "330ade6295msha04dc868820df5cp1d10f2jsn4dcbddab3bda",
    "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
  },
};

function getRandom() {
  return fetch(
    "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
    options
  )
    .then((res) => res.json())
    .then((joke) => {
      console.log(joke);
      var list = document.getElementById("jokeList");
      list.innerHTML = "";
      let li = document.createElement("li");
      li.innerText = joke.value;
      list.appendChild(li);
    })
    .catch((error) => console.error(error));
}

function searchJoke() {
  const inputData = document.getElementById("searchInput").value;
  if (inputData) {
    return fetch(
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?" +
        new URLSearchParams({
          query: inputData,
        }),
      options
    )
      .then((res) => res.json())
      .then((jokes) => {
        if (jokes.length > 0) {
          var list = document.getElementById("jokeList");
          list.innerHTML = "";
          jokes.result.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item.value;
            list.appendChild(li);
          });
        } else {
          alert("No joke found");
        }
      })
      .catch((error) => console.error(error));
  } else {
    alert("No search input");
  }
}
