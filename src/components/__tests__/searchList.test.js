import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchList from '../searchList';

afterEach(cleanup);

test('should render serach list component', () => {
	const itemsList = [ 1, 2 ];

	render(<SearchList itemsList={itemsList} />);
	const itemElement = screen.getByTestId('search-list');
	expect(itemElement).toBeInTheDocument();
});

test('matches snapshot', () => {
	const itemsList = [ 1, 2 ];

	const tree = renderer.create(<SearchList itemsList={itemsList} />).toJSON();
	expect(tree).toMatchSnapshot();
});
