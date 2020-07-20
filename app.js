//Instantiate Classes

const ft = new Fetch();
const ui = new DisplayWeather();

//Event Listeners

const city = document.querySelector('.search-city');
const button = document.querySelector('.submit');

button.addEventListener('click', () => {
	const currentCity = city.value;
	console.log(city.value);

	ft.getWeather(currentCity).then((data) => {
		ui.populateWeatherDisplay(data);
	});
	// ui.saveToLS(data);
});
