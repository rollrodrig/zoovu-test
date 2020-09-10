import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Home, HomeProps } from './home';
export default {
	title: 'Pages/Home',
	component: Home,
	argTypes: {},
} as Meta;
const Template: Story<HomeProps> = (args: any) => <Home />;
export const Default = Template.bind({});
