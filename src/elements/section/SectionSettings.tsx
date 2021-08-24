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

export interface SectionSettingsProps {}

export const SectionSettings = ({}: SectionSettingsProps) => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <DefaultSettings>
      <FormControl as="fieldset">
        <FormLabel as="legend">Child element direction</FormLabel>
        <RadioGroup
          defaultValue="0"
          value={props.direction}
          onChange={(next) => setProp((p) => (p.direction = next))}
        >
          <HStack spacing="24px">
            <Radio value="row">row</Radio>
            <Radio value="column">column</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>
          Control the direction for child elements
        </FormHelperText>
      </FormControl>
    </DefaultSettings>
  );
};
