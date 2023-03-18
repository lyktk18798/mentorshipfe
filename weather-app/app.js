const endpoint = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;
const myKey = `af06debfaf75258ae5951457ee2bd6f9`;
const body = document.body;
const form = document.querySelector("form");
const input = document.querySelector(".input");
const app = document.querySelector(".app-card");
const cardBottom = document.querySelector(".app-card-bottom");
const temperature = document.querySelector(".temperature-num");
const weatherIcon = document.querySelector(".weather-icon");
const weatherStatus = document.querySelector(".weather-status");
const weahterDescription = document.querySelector(".weather-description");
const windSpeed = document.querySelector(".wind-speed");
const windDegrees = document.querySelector(".wind-degrees");
const clouds = document.querySelector(".clouds");
const rain = document.querySelector(".rain");

async function appWeather(name = "Hanoi") {
  const response = await fetch(`${endpoint}&q=${name}&appid=${myKey}`);
  const data = await response.json();
  temperature.textContent = data.main.temp;
  windSpeed.innerHTML = `<i class="fa-solid fa-wind"></i> <span>${data.wind.speed}</span> m/s`;
  windDegrees.innerHTML = `<i class="fa-regular fa-flag"></i> <span>${data.wind.deg}</span> deg`
  clouds.innerHTML = `<i class="fa-solid fa-cloud"></i> <span>${data.clouds.all}</span> %`;

  if(data?.rain) {
    let test = data.rain;
    rain.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i> <span>1h ${Object.values(test)[0]} mm</span>`
  }
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  weatherStatus.textContent = data.weather[0].main;
  weahterDescription.textContent = data.weather[0].description;

  weatherImage(weatherStatus);
}

form.addEventListener("submit", async function (e){
  e.preventDefault();
  app.classList.add("is-loading");
  await appWeather(input.value);
  app.classList.remove("is-loading");
});

input.addEventListener("blur", async function() {
    app.classList.add("is-loading");
    await appWeather(input.value);
    app.classList.remove("is-loading");
})

//Set background
function weatherImage(weather) {
  const text = weatherStatus.textContent;
  switch (text) {
    case "Clouds":
      body.setAttribute("style", `background-image: url(./images/clouds.png)`);
      break;
    case "Thunderstorm":
      body.setAttribute(
        "style",
        `background-image: url(./images/thunderstorm.png)`
      );
      break;
    case "Snow":
      body.setAttribute("style", `background-image: url(./images/snow.png)`);
      break;
    case "Rain":
      body.setAttribute("style", `background-image: url(./images/rain.png)`);
      break;
    case "Drizzle":
      body.setAttribute("style", `background-image: url(./images/drizzle.png)`);
      break;
    case "Clear":
      body.setAttribute("style", `background-image: url(./images/clear.png)`);
      break;
    case "Atmosphere":
      body.setAttribute(
        "style",
        `background-image: url(./images/atmosphere.png)`
      );
      break;
    default:
      break;
  }
  if(text === "Rain") {
    cardBottom.classList.add("c-white");
  } else {
    cardBottom.classList.remove("c-white");
  }
}

appWeather();
