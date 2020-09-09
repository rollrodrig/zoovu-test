import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Timer, TimerProps } from './timer';
export default {
	title: 'Example/Timer',
	component: Timer,
	argTypes: {},
} as Meta;
const Template: Story<TimerProps> = (args) => <Timer {...args} />;
export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
