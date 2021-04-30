import React, { useState } from 'react';
import { getCountry } from '../api/IpApi';
import { isValidIP } from '../helpers/dataHelpers';
import CountryClock from './countryClock';
import CountryFlag from './countryFlag';
import Spinner from './spinner';
import ErrorMsg from './errorMsg';

const numberStyle = { backgroundColor: '#e5e5e5', borderRadius: '50%', width: '30px', height: '30px', flexShrink: '0' };

function IpItem({ item }) {
	const [ address, setAddress ] = useState('');
	const [ isSearching, setIsSearching ] = useState(false);
	const [ country, setCountry ] = useState({});
	const [ fieldError, setFieldError ] = useState(null);

	const onChange = (event) => {
		setAddress(event.target.value);
	};

	const searchAddress = () => {
		if (address.length > 0) {
			setIsSearching(true);
			setFieldError(null);

			if (isValidIP(address)) {
				getCountry(address)
					.then((res) => {
						setCountry(res.data);
					})
					.catch((err) => {
						alert(err.message);
						setCountry({});
					})
					.finally(() => setIsSearching(false));
			} else {
				setFieldError('Invalid input');
				setCountry({});
				setIsSearching(false);
			}
		}
	};

	return (
		<div className="d-flex p-2 flex-column" data-testid={`item-${item}`}>
			<div className="d-flex align-items-center">
				<div className="d-flex align-items-center justify-content-center mr-3" style={numberStyle}>
					{item}
				</div>
				<input
					type="text"
					className="form-control mr-3 w-50"
					aria-label="ip address"
					value={address}
					onChange={onChange}
					onBlur={searchAddress}
					disabled={isSearching}
					data-testid={`item-input-${item}`}
				/>
				<CountryFlag country={country} />
				<CountryClock ip={address} show={!isSearching && country && country.countryCode} />
				<Spinner show={isSearching} />
				<ErrorMsg error={fieldError} />
			</div>
		</div>
	);
}

export default IpItem;
