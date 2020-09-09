import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from './text';
export default {
	title: 'Typografy/Text',
	component: Text,
	argTypes: {},
} as Meta;
const Template: Story<TextProps> = (args) => <Text>Text example text</Text>;
export const Default = Template.bind({});
