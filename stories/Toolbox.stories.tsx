import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToolboxProps, Toolbox } from '../src';
import { ChakraProvider, Box, Icon, extendTheme } from '@chakra-ui/react';
import { GrCheckbox } from 'react-icons/gr';
import { BsPersonBoundingBox, BsInboxes } from 'react-icons/bs';
import { FaXbox } from 'react-icons/fa';
import { ImDropbox } from 'react-icons/im';
import { RiKeyboardBoxFill, RiExchangeBoxFill } from 'react-icons/ri';
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

const items = [
  { text: 'a', icon: GrCheckbox },
  { text: 'b', icon: BsPersonBoundingBox },
  { text: 'c', icon: FaXbox },
  { text: 'd', icon: ImDropbox },
  { text: 'e', icon: BsInboxes },
  { text: 'f', icon: RiKeyboardBoxFill },
  { text: 'g', icon: RiExchangeBoxFill },
];

const Template: Story<ToolboxProps> = (args) => (
  <ChakraProvider resetCSS={true} theme={myTheme}>
    <Box maxW={400}>
      <Toolbox {...args}>
        {items.map((i, key) => (
          <ToolItem text={i.text} key={key}>
            <Icon as={i.icon} />
          </ToolItem>
        ))}
      </Toolbox>
    </Box>
  </ChakraProvider>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Toolbox',
};
