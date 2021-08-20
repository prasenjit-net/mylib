import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { TemplateEditor, TemplateEditorProps } from '../src';

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
Default.args = {};
