 function getWeather(){
    const apiKey='history.openweathermap.org/data/2.5/aggregated/year?lat={lat}&lon={lon}&appid={API key}';
    const city=document.getElementById('city').value
;
if(
    !city){
        alert('Please Enter a City');
        return;
    }
 
 const currentWeatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
 const forecastUrl=`https://api.opneweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;


    fetch(currentWeatherUrl)
    .then(response=>response.json())
    .then(data=>{
        displayWeather(data);
    })
    .catch(error=>{
console.error('Error fetching current weather data:',error);
alert('Error fetching current weather data . Please try Again Later');

    });

    
    fetch(forecastUrl)
    .then(response=>response.json())
    .then(data=>{
        disiplayHourlyForecast(data.list);
    })
    .catch(error=>{
console.error('Error fetching hourly fore cast data:',error);
alert('Error fetching hourlyb forecast data . Please try Again Later');

    });
 }
 function displayWeather(data){
    const tempDivInfo=document.getElementById('temp-div');
    const weatherInfoDiv=document.getElementById('weather-info');
    const weatherIcon=document.getElementById('weather-icon');
    const hourlyForecastDiv=document.getElementById('hourly-forecast');
 }
 weatherInfoDiv.innerHTML='';
 hourlyForecastDiv.innerHTML='';
 tempDivInfo.innerHTML='';

  function displayWeather(data){
    if(data.cod==='404'){
        weatherInfoDiv.innerHTML=`<p>${data.message}</p>`;
    }else{
        const cityName=data.name;
        const temperature=Math.round(data.main.temp-273.15);
        const description=data.weather[0].description;
        const iconCode=data.weather[0].icon;
        const iconUrl=`https://openweathermap.org/img/wn${iconCode}@4x.png`;
        const temperatureHTML=`<p> ${temperature}℃</p>`;
        const weatherHTML=`
        <p>${cityName}</p>
        <p>${description}</p>`
        ;

        tempDivInfo.innerHTML=temperatureHTML;
        weatherInfoDiv.innerHTML=weatherHTML;
        weatherIcon.src=iconUrl;
        weatherIcon.alt=description;
        showImage();
    }
    function disiplayHourlyForecast(hourlyData){
        const hourlyForecastDiv=document.getElementById('hourly-forecast');
        const next24Hours=hourlyData.slice(0,8);
        next24Hours.forEach(item => {
           const dateTime=new DataTransfer(item.dt*1000);
           const hours =dateTime.getHours();
           const temperature=Math.round(item.main.temp-273.15);

        const iconCode=item.weather[0].icon;
        const iconUrl=`https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHTML=`<div class="hourly-item">
        <span>${hour}:00</span>
        <img src="${iconUrl}" alt="Hour Weather Icon">
        <span>${temperature}</span>
        
        
        </div>`;
        hourlyForecastDiv.innerHTML+=hourlyItemHTML;
});
    }
    function showImage(){
        const weatherIcon=document.getElementById('weather-icon');
        weatherIcon.style.display='block';
    }
  }