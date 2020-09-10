import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Username, UsernameProps } from './username';
export default {
	title: 'Header/Username',
	component: Username,
	argTypes: {},
} as Meta;
const Template: Story<UsernameProps> = (args) => <Username name={'roll'} />;
export const Default = Template.bind({});
