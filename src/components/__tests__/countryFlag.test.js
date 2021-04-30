import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CountryFlag from '../countryFlag';

afterEach(cleanup);

const country = {
	countryCode: 'IL',
	countryCode3: 'ISR',
	countryName: 'Israel',
	countryEmoji: '🇮🇱'
};

test('should render flag component', () => {
	render(<CountryFlag country={country} />);
	const flagElement = screen.getByTestId('flag');
	expect(flagElement).toBeInTheDocument();
});

test('matches snapshot', () => {
	const tree = renderer.create(<CountryFlag country={country} />).toJSON();
	expect(tree).toMatchSnapshot();
});
