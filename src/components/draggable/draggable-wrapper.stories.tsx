import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DraggableWraper, DraggableWraperProps } from './draggable-wrapper';
export default {
	title: 'Components/DraggableWraper',
	component: DraggableWraper,
	argTypes: {},
} as Meta;
const Template: Story<DraggableWraperProps> = (args) => (
	<DraggableWraper>OTHER COMPONENTS</DraggableWraper>
);
export const Default = Template.bind({});
