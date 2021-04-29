import React from 'react';
import IpItem from './ipItem';

function SearchList({ itemsList = [] }) {
	if (itemsList.length === 0) return null;

	return (
		<div data-testid="search-list" className="mt-3 pt-3" style={{ borderTop: '1px solid #dee2e6' }}>
			{itemsList.map((i) => <IpItem key={`ip-item-${i}`} item={i} />)}
		</div>
	);
}

export default SearchList;
