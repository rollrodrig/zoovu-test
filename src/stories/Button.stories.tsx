import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'ExampleDemos/ButtonRoll',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Second',
};

export const LargeXX = Template.bind({});
LargeXX.args = {
  size: 'large',
  label: 'Button Large',
};

export const SmallX = Template.bind({});
SmallX.args = {
  size: 'small',
  label: 'Button',
};
