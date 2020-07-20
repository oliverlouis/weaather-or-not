class DisplayWeather {
	constructor() {
		this.weatherDisplay = document.querySelector('.weather-display');
	}

	populateWeatherDisplay = (data) => {
		this.weatherDisplay.innerHTML = `
      
      <div class="main-display">
      <div class="current-weather">
         <h4 class="current-city">${data.name}</h4>
         <p class="current-date">${new Date()}</p>
         <h1 class="current-temp">${Math.round(data.main.temp)}ºC</h1>
         <h3 class="current-conditions">${data.weather[0].main}</h3>
      </div>
   </div>
   <div class="conditions-display">
      <div class="conditions-background"></div>
      <div class="top-container">
         <div class="high">
            <h4>High</h4>
            <p>${Math.round(data.main.temp_max)}ºC</p>
         </div>
         <div class="low">
            <h4>Low</h4>
            <p>${Math.round(data.main.temp_min)}ºC</p>
         </div>
         <div class="wind">
            <h4>Wind</h4>
            <p>${data.wind.speed}mph</p>
         </div>
      </div>
      <div class="bottom-container">
         <h4>${data.weather[0].main}: <span>${data.weather[0].description}</span></h4>
      </div>
   </div> 

      `;
	};
}
