const btFetchDog = document.getElementById("btFetchDog");

const fetchRandomDogImage = () => {
  fetch("https://api.hgbrasil.com/weather?key=1b4800da&user_ip=remote", {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      console.log(response);
      response.json();
      return response.json;
    })
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => console.log(err));
};

btFetchDog.addEventListener("click", fetchRandomDogImage);
