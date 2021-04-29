import axios from 'axios';
const BASE_COUNTRY_URL = 'https://api.ip2country.info/ip?';
const TIME_API_KEY = '56b18b730d50477ebd4fc5a4da146124';
const BASE_TIME_URL = 'https://api.ipgeolocation.io/timezone?';

export const getCountry = (ip) => {
	return axios.get(`${BASE_COUNTRY_URL}${ip}`, {
		headers: { Accept: 'application/json' }
	});
};

export const getTimezone = (ip) => {
	return axios.get(`${BASE_TIME_URL}apiKey=${TIME_API_KEY}&ip=${ip}`, {
		headers: { Accept: 'application/json' }
	});
};
