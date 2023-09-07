// function to catch city and retreive forecast from API

function getCityForecast() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city');
        return;
    }

    // Flush previous results
    const forecastList = document.getElementById('forecastData');
    forecastList.innerHTML = '';

    fetch(`/api/forecast/${encodeURIComponent(cityName)}`)
        .then((response) => response.json())
        .then((data) => {
            const forecastList = document.getElementById('forecastData');
            const cityElem = document.createElement('p');
            cityElem.textContent = data.city.toUpperCase();
            forecastList.appendChild(cityElem);

            data.forecast.forEach((weather) => {
                const temperatureElem = document.createElement('p');
                const temperatureRange = document.createElement('p');
                temperatureElem.textContent = `Temperature: ${weather.temp}°C`;
                temperatureRange.textContent = `MAX: ${weather.maxTemp}°C | MIN: ${weather.minTemp}°C`;
                forecastList.appendChild(temperatureElem);
                forecastList.appendChild(temperatureRange);
            });
        })
        .catch((error) => {
            console.log(error);
            alert('Could not fetch city data, try with other.');
        });
}

const submitButton = document.getElementById('submitCity');
submitButton.addEventListener('click', getCityForecast);
