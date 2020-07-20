class Fetch {
	async getWeather(city) {
		const apiKey = 'f1119b0e266c26e6f41665e31e34808f';
		const unit = 'metric';

		const data = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`);

		// const data = response.json();

		return data;
	}
}

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
         <h4 class="current-city">${data.data.name}, ${data.data.sys.country} </h4>
         <p class="current-date">${currentDate}</p>
         <h1 class="current-temp">${Math.round(data.data.main.temp)}º<span>C</span></h1>
         <h3 class="current-conditions">${data.data.weather[0].main}</h3>
      </div>
   </div>
   <div class="conditions-display">
      <div class="conditions-background"></div>
      <div class="top-container">
         <div class="high">
            <h4>High</h4>
            <p>${Math.round(data.data.main.temp_max)}ºC</p>
         </div>
         <div class="low">
            <h4>Low</h4>
            <p>${Math.round(data.data.main.temp_min)}ºC</p>
         </div>
         <div class="wind">
            <h4>Wind</h4>
            <p>${data.data.wind.speed}mph</p>
         </div>
      </div>
      <div class="bottom-container">
         <p>${data.data.weather[0].description}</p>
      </div>
   </div> 

      `;
	};
}

//Instantiate Classes

const ft = new Fetch();
const ui = new DisplayWeather();

//Event Listeners

const city = document.querySelector('.search-city');
const button = document.querySelector('.submit');

button.addEventListener('click', () => {
	const currentCity = city.value;

	ft.getWeather(currentCity).then((data) => {
		ui.populateWeatherDisplay(data);
	});
	city.value = '';
});

city.addEventListener('keyup', (event) => {
	if (event.keyCode === 13) {
		const currentCity = city.value;

		ft.getWeather(currentCity).then((data) => {
			console.log(data);
			ui.populateWeatherDisplay(data);
		});

		city.value = '';
	}
});
