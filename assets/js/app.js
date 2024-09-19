const apiKey = "1cd08582bb4bcb3828fb20120d619efc";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("submit");
const imageChange = document.getElementById("changeApiimage");

async function CurrentWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".celValue").innerHTML = data.main.temp;
  document.querySelector(".man").innerHTML = data.name;
  document.querySelector(".tx").innerHTML = data.weather[0].description;
  document.querySelector(".windSatus").innerHTML = data.wind.speed + `Km/h`;
  document.querySelector(".humidityStatus").innerHTML =
    data.main.humidity + `%`;
  document.querySelector(".visibilityStatus").innerHTML = data.visibility;
  document.getElementById("sunrise").innerHTML = data.sys.sunrise;
  document.getElementById("sunset").innerHTML = data.sys.sunset;

  if (data.weather[0].main == "Clouds") {
    imageChange.src = "assets/img/icons8-rain-cloud-48.png";
  } else if (data.weather[0].main == "Clear") {
    imageChange.src = "assets/img/icons8-cloud-48.png";
  } else if (data.weather[0].main == "Rain") {
    imageChange.src = "assets/img/icons8-rain-50.png";
  } else if (data.weather[0].main == "Drizzle") {
    imageChange.src = "assets/img/icons8-drizzle-50.png";
  } else if (data.weather[0].main == "Mist") {
    imageChange.src = "assets/img/icons8-mist-48.png";
  }
}

searchButton.addEventListener("click", () => {
  CurrentWeather(searchInput.value);
});
