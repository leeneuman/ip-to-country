import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Modal from './../modal';

afterEach(cleanup);

test('should render modal component', () => {
	render(<Modal />);
	const itemElement = screen.getByTestId('modal');
	expect(itemElement).toBeInTheDocument();
});

test('matches snapshot', () => {
	const tree = renderer.create(<Modal />).toJSON();
	expect(tree).toMatchSnapshot();
});
