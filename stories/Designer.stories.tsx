import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Designer, DesignerProps } from '../src';

const meta: Meta = {
  title: 'Example/Designer',
  component: Designer,
};
export default meta;

const Template: Story<DesignerProps> = (args) => <Designer {...args} />;

export const Default = Template.bind({});

Default.args = {};
