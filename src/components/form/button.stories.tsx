import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './button';
import { ArrowRight } from '../icons/icons';
export default {
	title: 'Form/Button',
	component: Button,
	argTypes: {},
} as Meta;
const Template: Story<ButtonProps> = (args) => (
	<Button {...args}>
		Let&apos;s go <ArrowRight />
	</Button>
);
export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
