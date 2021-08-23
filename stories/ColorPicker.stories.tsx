import React from 'react';
import { Box } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';
import { ColorPicker, ColorPickerProps } from '../src';
import {} from 'react-color';

export default {
  title: 'Example/ColorPicker',
  component: ColorPicker,
} as Meta;

const Template: Story<ColorPickerProps> = (props: ColorPickerProps) => {
  return (
    <Box w={400}>
      <ColorPicker {...props} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: '#ffffff',
};
