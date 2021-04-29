import React from 'react';

function ErrorMsg({ error = null }) {
	if (!error) return null;

	return <div className="mt-1 text-danger">{error}</div>;
}

export default ErrorMsg;
