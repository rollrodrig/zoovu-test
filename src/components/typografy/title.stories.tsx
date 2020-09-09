import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Title, TitleProps } from './title';
export default {
	title: 'Typografy/Title',
	component: Title,
	argTypes: {},
} as Meta;
const Template: Story<TitleProps> = (args) => <Title>Title example text</Title>;
export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
