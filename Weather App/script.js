function getWeather() {
    const apiKey = "952c5f8292b64c42acd1888c60ccdd31"; 
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please Enter a City");
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    // Current weather
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("Error fetching current weather:", error);
        });

    // Forecast
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            if (data.list) {
                displayHourlyForecast(data.list);
            } else {
                console.error("Forecast data not available:", data);
            }
        })
        .catch(error => {
            console.error("Error fetching forecast:", error);
        });
}
