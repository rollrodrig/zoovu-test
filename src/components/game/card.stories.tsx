import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from './card';
import imageExample from './zoovu-u.svg';
export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {},
} as Meta;
const Template: Story<CardProps> = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
	img: imageExample,
};
