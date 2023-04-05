import { endpoint, myKey } from "./endpoint.js";

const body = document.body;
const form = document.querySelector("form");
const input = document.querySelector(".input");
const app = document.querySelector(".app-card");
const cardBottom = document.querySelector(".app-card-bottom");
const temperature = document.querySelector(".temperature-num");
const weatherIcon = document.querySelector(".weather-icon");
const weatherStatus = document.querySelector(".weather-status");
const weahterDescription = document.querySelector(".weather-description");
const windSpeed = document.querySelector(".wind-speed .weather-info");
const windDegrees = document.querySelector(".wind-degrees .weather-info");
const clouds = document.querySelector(".clouds .weather-info");
const rain = document.querySelector(".rain .weather-info");
const weatherInfoList = document.querySelectorAll(".weather-info");

async function appWeather(name = "Hanoi") {
  try {
    const response = await fetch(`${endpoint}&q=${name}&appid=${myKey}`);
    const data = await response.json();
    handleReponse(data);
  } catch (err) {
    await appWeather("Hue");
    input.value = "Hue";
  }
}

function handleReponse(data) {
  weatherInfoList.forEach((item) => item.classList.remove("is-show"));
  temperature.textContent = data?.main?.temp;
  handleWeatherInfo(windSpeed, data?.wind?.speed, "m/s");
  handleWeatherInfo(windDegrees, data?.wind?.deg, "deg");
  handleWeatherInfo(clouds, data?.clouds?.all, "%");
  if (data?.rain) {
    rain.classList.add("is-show");
    rain.lastElementChild.textContent = `1h ${Object.values(data.rain)[0]} mm`;
  }

  if (data?.weather[0]?.icon)
    weatherIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`
    );

  if (data?.weather[0]?.main) weatherStatus.textContent = data.weather[0].main;

  if (data?.weather[0]?.description)
    weahterDescription.textContent = data.weather[0].description;

  weatherImage(weatherStatus);
}

function handleWeatherInfo(info, value, unit) {
  if (value) {
    info.classList.add("is-show");
    info.lastElementChild.textContent = `${value} ${unit}`;
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  app.classList.toggle("is-loading");
  await appWeather(input.value);
  app.classList.toggle("is-loading");
});

input.addEventListener("blur", async function () {
  app.classList.toggle("is-loading");
  await appWeather(input.value);
  app.classList.toggle("is-loading");
});

//Set background
function weatherImage(weather) {
  const text = weather.textContent;
  switch (text.toLowerCase()) {
    case "clouds":
      body.setAttribute("style", `background-image: url(./images/clouds.png)`);
      break;
    case "thunderstorm":
      body.setAttribute(
        "style",
        `background-image: url(./images/thunderstorm.png)`
      );
      break;
    case "snow":
      body.setAttribute("style", `background-image: url(./images/snow.png)`);
      break;
    case "rain":
      body.setAttribute("style", `background-image: url(./images/rain.png)`);
      break;
    case "drizzle":
      body.setAttribute("style", `background-image: url(./images/drizzle.png)`);
      break;
    case "clear":
      body.setAttribute("style", `background-image: url(./images/clear.png)`);
      break;
    case "atmosphere":
      body.setAttribute(
        "style",
        `background-image: url(./images/atmosphere.png)`
      );
      break;
    default:
      break;
  }
}

appWeather();
