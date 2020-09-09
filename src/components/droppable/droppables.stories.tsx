import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Droppables, DroppablesProps } from './droppables';
export default {
	title: 'Components/Droppables',
	component: Droppables,
	argTypes: {},
} as Meta;
const Template: Story<DroppablesProps> = (args) => <Droppables {...args} />;
export const Default = Template.bind({});
