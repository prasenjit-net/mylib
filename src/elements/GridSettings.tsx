import React from 'react';
import {
  Box,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  NumberInputField,
  NumberInput,
  FormLabel,
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
  const setSize = (valueAsString: string) => {
    setProp((prp) => (prp.gridCount = valueAsString));
  };
  return (
    <Box>
      <FormControl id="amount">
        <FormLabel>Column Count</FormLabel>
        <NumberInput max={5} min={1} onChange={setSize} value={props.gridCount}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </Box>
  );
};
