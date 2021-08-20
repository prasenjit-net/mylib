import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TemplateEditor, TemplateEditorProps } from '../src';
import { items } from '../src/helper/ToolboxData';
import { Box } from '@chakra-ui/react';

export default {
  title: 'Example/Editor',
  component: TemplateEditor,
} as Meta;

const Template: Story<TemplateEditorProps> = (args: TemplateEditorProps) => (
  <Box height="95vh">
    <TemplateEditor {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  items,
};
