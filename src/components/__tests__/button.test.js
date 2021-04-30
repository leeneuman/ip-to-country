import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './../button';

afterEach(cleanup);

test('should render button component', () => {
	render(<Button label="test label" />);
	const buttonElement = screen.getByTestId('button');
	expect(buttonElement).toBeInTheDocument();
	expect(buttonElement).toHaveTextContent('test label');
});

test('matches snapshot', () => {
	const tree = renderer.create(<Button label="test label" />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('calls the onClick function', () => {
	const onClick = jest.fn();
	render(<Button onClick={onClick} />);
	const buttonElement = screen.getByTestId('button');
	fireEvent.click(buttonElement);
	expect(onClick).toHaveBeenCalled();
});
