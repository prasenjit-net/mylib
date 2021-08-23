import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
} from '@chakra-ui/react';
import { DefaultSettings } from '../../components';
import { useNode } from '@craftjs/core';

export const HeadingSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <DefaultSettings>
      <FormControl as="fieldset">
        <FormLabel as="legend">Element Margin</FormLabel>
        <RadioGroup
          value={props.fontSize}
          onChange={(next) => setProp((p) => (p.fontSize = next))}
        >
          <HStack spacing="24px">
            <Radio value="4xl">4xl</Radio>
            <Radio value="2xl">2xl</Radio>
            <Radio value="xl">xl</Radio>
            <Radio value="lg">lg</Radio>
            <Radio value="md">md</Radio>
            <Radio value="sm">sm</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Simple margin on all four side</FormHelperText>
      </FormControl>
    </DefaultSettings>
  );
};
