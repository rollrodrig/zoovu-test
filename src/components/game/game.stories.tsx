import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Game, GameProps } from './game';
export default {
	title: 'Example/Game',
	component: Game,
	argTypes: {},
} as Meta;
const Template: Story<GameProps> = (args) => <Game {...args} />;
export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
