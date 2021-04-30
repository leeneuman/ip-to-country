import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CountryClock from '../countryClock';

afterEach(cleanup);

test('should render clock component', () => {
	render(<CountryClock ip={'79.179.206.105'} show={true} />);
	const clockElement = screen.getByTestId('clock');
	expect(clockElement).toBeInTheDocument();
});

test('matches snapshot', () => {
	const tree = renderer.create(<CountryClock ip={'79.179.206.105'} show={true} />).toJSON();
	expect(tree).toMatchSnapshot();
});
