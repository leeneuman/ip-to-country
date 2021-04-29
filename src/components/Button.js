import React from 'react';

function Button({ label, onClick }) {
	return (
		<button type="button" className="btn btn-primary mt-3" onClick={onClick} aria-label={label}>
			<span className="mr-1" aria-hidden="true">
				&#x2B;
			</span>
			{label}
		</button>
	);
}

export default Button;
