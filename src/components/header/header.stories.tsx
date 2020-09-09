import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from './header';
export default {
	title: 'Example/Header',
	component: Header,
	argTypes: {},
} as Meta;
const Template: Story<HeaderProps> = (args) => <Header {...args} />;
export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
