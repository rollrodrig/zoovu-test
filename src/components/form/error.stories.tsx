import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Error, ErrorProps } from './error';
export default {
	title: 'Form/Error',
	component: Error,
	argTypes: {},
} as Meta;
const Template: Story<ErrorProps> = (args) => <Error>Error example</Error>;
export const Default = Template.bind({});
