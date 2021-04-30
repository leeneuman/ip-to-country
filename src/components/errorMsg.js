import React from 'react';

function ErrorMsg({ error = null }) {
	if (!error) return null;

	return (
		<div data-testid="error-msg" className="mt-1 text-danger">
			{error}
		</div>
	);
}

export default ErrorMsg;
