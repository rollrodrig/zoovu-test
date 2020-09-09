import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Draggables, DraggablesProps } from './draggables';
export default {
	title: 'Components/Draggables',
	component: Draggables,
	argTypes: {},
} as Meta;
const Template: Story<DraggablesProps> = (args) => <Draggables {...args} />;
export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
