import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Timer, TimerProps } from './timer';
export default {
	title: 'Header/Timer',
	component: Timer,
	argTypes: {},
} as Meta;
const Template: Story<TimerProps> = (args) => <Timer time={20} />;
export const Default = Template.bind({});
