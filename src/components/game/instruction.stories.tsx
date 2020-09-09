import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Instructions, InstructionsProps } from './instructions';
import imageExample from './zoovu-u.svg';
export default {
	title: 'Components/Instructions',
	component: Instructions,
	argTypes: {},
} as Meta;
const Template: Story<InstructionsProps> = (args) => <Instructions {...args} />;
export const Default = Template.bind({});
