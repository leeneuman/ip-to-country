import React from 'react';

function Spinner({ show = false }) {
	if (!show) return null;

	return <div className="text-secondary spinner-border spinner-border-sm" role="status" />;
}

export default Spinner;
