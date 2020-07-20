class DisplayWeather {
	constructor() {
		this.weatherDisplay = document.querySelector('.weather-display');
	}

	populateWeatherDisplay = (data) => {
		let dateObj, day, month, year, currentDate;

		dateObj = new Date();
		day = dateObj.getDate();
		month = dateObj.getUTCMonth();
		year = dateObj.getFullYear();

		const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		currentDate = `${day} ${monthNames[month]}, ${year}`;

		this.weatherDisplay.innerHTML = `
      
      <div class="main-display">
      <div class="current-weather">
         <h4 class="current-city">${data.name}, ${data.sys.country}</h4>
         <p class="current-date">${currentDate}</p>
         <h1 class="current-temp">${Math.round(data.main.temp)}º<span>C</span></h1>
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
         <p>${data.weather[0].description}</p>
      </div>
   </div> 

      `;
	};
}
