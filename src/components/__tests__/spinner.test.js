import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Spinner from '../spinner';

afterEach(cleanup);

test('should render spinner component', () => {
	render(<Spinner show />);
	const itemElement = screen.getByTestId('spinner');
	expect(itemElement).toBeInTheDocument();
});

test('matches snapshot', () => {
	const tree = renderer.create(<Spinner show />).toJSON();
	expect(tree).toMatchSnapshot();
});
