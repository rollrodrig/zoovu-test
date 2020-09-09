import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Score, ScoreProps } from './score';
export default {
	title: 'Example/Score',
	component: Score,
	argTypes: {},
} as Meta;
const Template: Story<ScoreProps> = (args) => <Score {...args} />;
export const Default = Template.bind({});
