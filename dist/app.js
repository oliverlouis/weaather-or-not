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
			ui.populateWeatherDisplay(data);
		});

		city.value = '';
	}
});
