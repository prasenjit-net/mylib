import React from 'react';
import {
  Box,
  FormHelperText,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  FormControl,
} from '@chakra-ui/react';
import { useNode } from '@craftjs/core';

export const GridSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const setGridSize = (valueAsString: string) => {
    setProp((prp) => (prp.gridCount = valueAsString));
  };
  return (
    <Box>
      <FormControl as="fieldset">
        <FormLabel as="legend">Column Count</FormLabel>
        <RadioGroup value={props.gridCount} onChange={setGridSize}>
          <HStack spacing="24px">
            <Radio value="1">One</Radio>
            <Radio value="2">Two</Radio>
            <Radio value="3">Three</Radio>
            <Radio value="4">Four</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Select how many columns are needed</FormHelperText>
      </FormControl>
    </Box>
  );
};
