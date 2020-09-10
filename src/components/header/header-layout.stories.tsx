import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HeaderLayout, HeaderLayoutProps } from './header-layout';
import { Username } from './username';
import { Timer } from './timer';
export default {
	title: 'Header/HeaderLayout',
	component: HeaderLayout,
	argTypes: {},
} as Meta;
const Template: Story<HeaderLayoutProps> = (args) => (
	<HeaderLayout
		username={<Username name="ROLL" />}
		score={<Timer time={25} />}
	/>
);
export const Default = Template.bind({});
