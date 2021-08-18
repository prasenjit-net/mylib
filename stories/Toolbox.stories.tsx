import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToolboxProps, Toolbox } from '../src';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';

const meta: Meta = {
  title: 'Example/Toolbox',
  component: Toolbox,
};
export default meta;

const colors = {
  brand: {
    400: '#845EC2',
  },
};
const myTheme = extendTheme({ colors });

const Template: Story<ToolboxProps> = (args) => (
  <ChakraProvider resetCSS={true} theme={myTheme}>
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

export const Test: Story = (args) => (
  <ChakraProvider>
    <Box color="red.400">Some Text</Box>
    <Box bgColor="red.500">Some Other Text</Box>
  </ChakraProvider>
);
