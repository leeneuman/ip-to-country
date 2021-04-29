import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CountryFlag from '../countryFlag';

afterEach(cleanup);

test('matches snapshot', () => {
	const tree = renderer.create(<CountryFlag country="{countryCode: IL, countryCode: Israel}" />).toJSON();
	expect(tree).toMatchSnapshot();
});
