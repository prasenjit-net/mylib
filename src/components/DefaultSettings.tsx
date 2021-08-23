import React, { ReactNode } from 'react';
import {
  VStack,
  FormControl,
  RadioGroup,
  FormLabel,
  HStack,
  Radio,
  FormHelperText,
} from '@chakra-ui/react';
import { useNode } from '@craftjs/core';
import { ColorPicker } from './ColorPicker';

export interface DefaultSettingsProps {
  children?: ReactNode;
}

export const DefaultSettings = ({ children }: DefaultSettingsProps) => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <VStack spacing={5}>
      {children}
      <FormControl as="fieldset">
        <FormLabel as="legend">Element Margin</FormLabel>
        <RadioGroup
          defaultValue="0"
          value={props.margin}
          onChange={(next) => setProp((p) => (p.margin = next))}
        >
          <HStack spacing="24px">
            <Radio value="0">0</Radio>
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
            <Radio value="4">4</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Simple margin on all four side</FormHelperText>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">Element Padding</FormLabel>
        <RadioGroup
          defaultValue="0"
          value={props.padding}
          onChange={(next) => setProp((p) => (p.padding = next))}
        >
          <HStack spacing="24px">
            <Radio value="0">0</Radio>
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
            <Radio value="4">4</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Simple padding on all four side</FormHelperText>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">Background Color</FormLabel>
        <ColorPicker
          value={props.bgColor}
          onChange={(e) => setProp((p) => (p.bgColor = e.target.value))}
        />
        <FormHelperText>Changes background color of element</FormHelperText>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">Text Color</FormLabel>
        <ColorPicker
          value={props.color}
          onChange={(e) => setProp((p) => (p.color = e.target.value))}
        />
        <FormHelperText>Changes text color of element</FormHelperText>
      </FormControl>
    </VStack>
  );
};
