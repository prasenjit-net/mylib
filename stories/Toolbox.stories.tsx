import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToolboxProps, Toolbox } from '../src';
import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';
import { GrCheckbox } from 'react-icons/gr';
import { BsPersonBoundingBox, BsInboxes } from 'react-icons/bs';
import { FaXbox } from 'react-icons/fa';
import { ImDropbox } from 'react-icons/im';
import { RiKeyboardBoxFill, RiExchangeBoxFill } from 'react-icons/ri';

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
  { text: 'Checkbox', icon: GrCheckbox },
  { text: 'Person In Box', icon: BsPersonBoundingBox },
  { text: 'XBox', icon: FaXbox },
  { text: 'Dropbox', icon: ImDropbox },
  { text: 'Inboxes', icon: BsInboxes },
  { text: 'Keyboard', icon: RiKeyboardBoxFill },
  { text: 'Exchange', icon: RiExchangeBoxFill },
];

const Template: Story<ToolboxProps> = (args) => (
  <ChakraProvider resetCSS={true} theme={myTheme}>
    <Flex maxW={400} height="90vh" direction="row" alignItems="stretch">
      <Toolbox {...args} items={items} />
    </Flex>
  </ChakraProvider>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Toolbox',
};
