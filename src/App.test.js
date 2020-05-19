import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App, { Podcast } from './App';

import './setupTests';

let wrapper;
beforeEach(() => {
	wrapper = shallow(<App />);
});

test('renders component', () => {
	const { getByText } = render(<App />);
	const componentTitle = getByText(
		/This is landing page with Podcast and Episode/i
	);
	expect(componentTitle).toBeInTheDocument();
});

it('renders the inner Counter', () => {
	expect(wrapper.find(Podcast).length).toEqual(0);
});
it('renders Podcasts', () => {
	expect(wrapper.find('podcast').text()).toEqual('2');
});
