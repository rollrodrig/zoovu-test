import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LoginView, LoginViewProps } from './login-view';
export default {
	title: 'Home/LoginView',
	component: LoginView,
	argTypes: {},
} as Meta;
const Template: Story<LoginViewProps> = (args) => (
	<LoginView error={true} onInputChange={() => {}} onUserLogin={() => {}} />
);
export const Default = Template.bind({});
