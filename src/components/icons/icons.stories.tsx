import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconCoffe } from './icons';
export default {
	title: 'Icons/IconCoffe',
	component: IconCoffe,
	argTypes: {},
} as Meta;
const Template: Story<any> = (args) => <IconCoffe {...args} />;
export const Default = Template.bind({});
