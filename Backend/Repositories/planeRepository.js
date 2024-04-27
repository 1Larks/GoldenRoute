const url = 'https://adsbx-flight-sim-traffic.p.rapidapi.com/api/aircraft/json/lat/42.1781/lon/17.5/dist/25/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74f3ffcee6msh1a010493179ee28p1cfb04jsna1e30ca6bdd2',
		'X-RapidAPI-Host': 'adsbx-flight-sim-traffic.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}