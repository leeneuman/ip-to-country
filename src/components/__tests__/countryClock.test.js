import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CountryClock from '../countryClock';

afterEach(cleanup);

test('matches snapshot', () => {
	const tree = renderer.create(<CountryClock ip={'79.179.206.105'} show={true} />).toJSON();
	expect(tree).toMatchSnapshot();
});
