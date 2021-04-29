import React from 'react';
import IpItem from './IpItem';

function SearchList({ itemsList = [] }) {
	if (itemsList.length === 0) return null;

	return (
		<div className="mt-3 pt-3" style={{ borderTop: '1px solid #dee2e6' }}>
			{itemsList.map((i) => <IpItem key={`ip-item-${i}`} item={i} />)}
		</div>
	);
}

export default SearchList;
