import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Login, LoginProps } from './login';
export default {
	title: 'Example/Login',
	component: Login,
	argTypes: {},
} as Meta;
const Template: Story<LoginProps> = (args) => <Login {...args} />;
export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
