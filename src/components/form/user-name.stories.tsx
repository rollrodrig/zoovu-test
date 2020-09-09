import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserName, UserNameProps } from './user-name';
export default {
  title: 'Example/UserName',
  component: UserName,
  argTypes: {},
} as Meta;
const Template: Story<UserNameProps> = (args) => <UserName {...args} />;
export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };