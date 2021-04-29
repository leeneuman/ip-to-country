import React, { useEffect, useState } from 'react';
import { getTimezone } from '../api/IpApi';
import { isValidIP } from '../helpers/dataHelpers';
import Clock from 'react-live-clock';

function CountryClock({ ip, show = false }) {
	const [ timeZone, setTimeZone ] = useState('');

	useEffect(
		() => {
			if (isValidIP(ip)) {
				getTimezone(ip).then((res) => setTimeZone(res.data.timezone)).catch((err) => console.log(err.message));
			}
		},
		[ ip ]
	);

	if (!timeZone || !show) return null;

	return <Clock format={'HH:mm:ss'} ticking={true} timezone={timeZone} />;
}

export default CountryClock;
