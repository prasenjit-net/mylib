import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToolboxProps, Toolbox } from '../src';
import { ChakraProvider, Box } from '@chakra-ui/react';

const meta: Meta = {
  title: 'Example/Toolbox',
  component: Toolbox,
};
export default meta;

const Template: Story<ToolboxProps> = (args) => (
  <ChakraProvider resetCSS={true}>
    <Box maxW={400}>
      <Toolbox {...args} />
    </Box>
  </ChakraProvider>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Toolbox',
  items: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
};
