// Current weather
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

const forecastContainer = document.querySelector('#forecast');

const weatherUrl =
  'https://api.openweathermap.org/data/2.5/weather?lat=-26.18004616041082&lon=27.917720052999307&units=metric&appid=390c8997f982d4aa4e2b733c4ac2024a';

const forecastUrl =
  'https://api.openweathermap.org/data/2.5/forecast?lat=-26.18004616041082&lon=27.917720052999307&units=metric&appid=390c8997f982d4aa4e2b733c4ac2024a';


// Get current weather
async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    console.log("Current weather:", data);

    displayWeather(data);

  } catch (error) {
    console.error("Weather error:", error);
  }
}


// Display current weather
function displayWeather(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

  const iconsrc =
    `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  const desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  captionDesc.textContent = desc;
}


// Get forecast
async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    console.log("Forecast:", data);

    displayForecast(data);

  } catch (error) {
    console.error("Forecast error:", error);
  }
}


// Display 3-day forecast
function displayForecast(data) {

  forecastContainer.innerHTML = '';

  const daily = {};

  // Group forecast entries by date
  data.list.forEach(entry => {

    // FIX: dt_txt is a string
    const date = entry.dt_txt.split(' ')[0];

    if (!daily[date]) {
      daily[date] = [];
    }

    daily[date].push(entry);
  });


  // Get the next 3 days
  Object.keys(daily).slice(1, 4).forEach(date => {

    const dayEntries = daily[date];

    // Use the middle forecast entry
    const midday = dayEntries[Math.floor(dayEntries.length / 2)];

    const dayName = new Date(date + 'T12:00:00')
      .toLocaleDateString('en-US', {
        weekday: 'long'
      });

    const tempMin = Math.round(
      Math.min(...dayEntries.map(entry => entry.main.temp_min))
    );

    const tempMax = Math.round(
      Math.max(...dayEntries.map(entry => entry.main.temp_max))
    );

    const conditionText =
      midday.weather[0].description;

    const conditionIcon =
      `https://openweathermap.org/img/w/${midday.weather[0].icon}.png`;


    // Create forecast card
    const cardHTML = `
      <div class="forecast-card">
        <h3>${dayName}</h3>

        <img
          class="icon"
          src="${conditionIcon}"
          alt="${conditionText}"
          width="50"
          height="50"
        >

        <p>${conditionText}</p>

        <p>
          <strong>${tempMax}°C</strong> /
          ${tempMin}°C
        </p>
      </div>
    `;

    forecastContainer.innerHTML += cardHTML;
  });
}


// Run functions
fetchWeather();
fetchForecast();