import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToolboxProps, Toolbox } from '../src';
import { ChakraProvider, Box, Icon, extendTheme } from '@chakra-ui/react';
import { GrCheckbox } from 'react-icons/gr';
import { ToolItem } from '../src/toolbox/ToolItem';

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

const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const Template: Story<ToolboxProps> = (args) => (
  <ChakraProvider resetCSS={true} theme={myTheme}>
    <Box maxW={400}>
      <Toolbox {...args}>
        {items.map((i, key) => (
          <ToolItem text={i} key={key} icon={<Icon as={GrCheckbox} />} />
        ))}
      </Toolbox>
    </Box>
  </ChakraProvider>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Toolbox',
};
