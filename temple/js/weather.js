// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const currentWeather = document.querySelector("#current-weather");
const currentHumidity = document.querySelector("#humidity")
const weatherIcon = document.querySelector("#weather-icon");

// API URL
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=-34.9215&lon=-57.9545&units=imperial&appid=0f9b95d11a5a00e2312ffdb8bd89daea";

// Asynchonus function with fetch requesting the API URL
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

// Weather and images
function displayResults(weatherData) {
  currentTemp.innerHTML = `Local temperature: <strong>${weatherData.main.temp.toFixed(
    0
  )}°</strong>F<br>Feels like: <strong>${weatherData.main.feels_like.toFixed(
    0
  )}°</strong>F`;

  currentHumidity.innerHTML = `Humidity: <strong>${weatherData.main.humidity}%</strong>`

  currentWeather.innerHTML = `${weatherData.weather[0].description}`;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.innerHTML = desc;
}

// Capialize current weather
document.querySelector("#current-weather").style.textTransform = "capitalize";