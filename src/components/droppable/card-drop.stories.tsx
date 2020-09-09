import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardDrop, CardDropProps } from './card-drop';
export default {
	title: 'Components/CardDrop',
	component: CardDrop,
	argTypes: {},
} as Meta;
const Template: Story<CardDropProps> = (args) => <CardDrop {...args} />;
export const Default = Template.bind({});
