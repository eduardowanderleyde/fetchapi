const btFetchDog = document.getElementById("btFetchDog");

const fetchRandomDogImage = () => {
  fetch("https://api.hgbrasil.com/weather?key=b19d19f4")
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
