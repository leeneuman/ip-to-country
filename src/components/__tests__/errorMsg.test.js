import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ErrorMsg from './../errorMsg';

afterEach(cleanup);

test('should render error msg component', () => {
	render(<ErrorMsg error="test error msg" />);
	const errorElement = screen.getByTestId('error-msg');
	expect(errorElement).toBeInTheDocument();
	expect(errorElement).toHaveTextContent('test error msg');
});

test('matches snapshot', () => {
	const tree = renderer.create(<ErrorMsg error="test error msg" />).toJSON();
	expect(tree).toMatchSnapshot();
});
