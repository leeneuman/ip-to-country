import React from 'react';
import ReactCountryFlag from 'react-country-flag';

function CountryFlag({ country }) {
	if (!country || !country.countryCode) return null;

	return (
		<ReactCountryFlag
			className="mr-3"
			countryCode={country.countryCode}
			svg
			style={{
				width: '2em',
				height: '2em'
			}}
			aria-label={country.countryName}
		/>
	);
}

export default CountryFlag;
