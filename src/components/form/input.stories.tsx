import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './input';
export default {
	title: 'Form/Input',
	component: Input,
	argTypes: {},
} as Meta;
const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Default = Template.bind({});
