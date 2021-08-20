import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex } from '@chakra-ui/react';
import { ToolboxProps, Toolbox } from '../src';

const meta: Meta = {
  title: 'Example/Toolbox',
  component: Toolbox,
};
export default meta;

const Template: Story<ToolboxProps> = (args) => (
  <Flex maxW={400} height="90vh" direction="row" alignItems="stretch">
    <Toolbox {...args} />
  </Flex>
);
export const Default = Template.bind({});

Default.args = {
  title: 'Toolbox',
};
