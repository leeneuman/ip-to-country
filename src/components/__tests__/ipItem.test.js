import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import IpItem from './../ipItem';

afterEach(cleanup);

test('should render ip item component', () => {
	render(<IpItem item={1} />);
	const itemElement = screen.getByTestId('item-1');
	expect(itemElement).toBeInTheDocument();
});

test('matches snapshot', () => {
	const tree = renderer.create(<IpItem item={1} />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('calls the onChange function', () => {
	render(<IpItem item={1} />);
	const inputElement = screen.getByTestId('item-input-1');
	fireEvent.change(inputElement, {
		target: { value: 'Test' }
	});
	expect(inputElement).toHaveValue('Test');
});
