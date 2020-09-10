import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DroppableWraper, DroppableWraperProps } from './droppable-wrapper';
export default {
	title: 'Components/DroppableWraper',
	component: DroppableWraper,
	argTypes: {},
} as Meta;
const Template: Story<DroppableWraperProps> = (args) => (
	<DroppableWraper>OTHER COMPONENTS</DroppableWraper>
);
export const Default = Template.bind({});
