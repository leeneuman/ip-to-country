import React, { useState } from 'react';
import Button from './button';
import SearchList from './searchList';

function Modal() {
	const [ itemsList, setItemsList ] = useState([]);

	const addRow = () => {
		setItemsList([ ...itemsList, itemsList.length + 1 ]);
	};

	const reset = () => {
		setItemsList([]);
	};

	return (
		<div>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#IPModal">
				Search IP's country
			</button>

			<div
				className="modal fade"
				id="IPModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="ip to country modal"
				aria-hidden="true"
				data-backdrop="static"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="IPModal">
								IP Lookup
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								onClick={reset}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div>Enter one or more IP addresses and get their conutry</div>
							<Button label={'Add'} onClick={addRow} />
							<SearchList itemsList={itemsList} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
