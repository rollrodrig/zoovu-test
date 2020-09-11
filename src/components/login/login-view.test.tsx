import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginView } from './login-view';
import { Button } from '../form/button';
import { Error } from '../form/error';
Enzyme.configure({ adapter: new Adapter() });
describe('<LoginView /> ', () => {
	it('Should not render Error', () => {
		const wrapper = shallow(
			<LoginView
				onInputChange={() => {}}
				onUserLogin={() => {}}
				error={false}
			/>
		);
		expect(wrapper.find(Error).length).toBe(0);
	});
	it('Should render Error', () => {
		const wrapper = shallow(
			<LoginView
				onInputChange={() => {}}
				onUserLogin={() => {}}
				error={true}
			/>
		);
		expect(wrapper.find(Error).length).toBe(1);
	});
});
