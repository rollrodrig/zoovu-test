import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './input';
export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {},
} as Meta;
const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };