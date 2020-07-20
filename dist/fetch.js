class Fetch {
	async getWeather(city) {
		const apiKey = 'f1119b0e266c26e6f41665e31e34808f';
		const unit = 'metric';

		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`);

		const data = response.json();

		return data;
	}
}
