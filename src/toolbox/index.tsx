import { Grid, Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { ToolItem, ToolItemProps } from './ToolItem';
import { DEFAULT_TOOLS } from '../elements';

export interface ToolboxProps {
  items?: ToolItemProps[];
}

export const Toolbox = (props: ToolboxProps) => {
  let mergedItems;
  if (props.items) {
    mergedItems = [...props.items, ...DEFAULT_TOOLS];
  } else {
    mergedItems = DEFAULT_TOOLS;
  }
  return (
    <Box>
      <Heading fontSize="md" m="3">
        Tools
      </Heading>
      <Grid
        direction="row"
        wrap="wrap"
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap={6}
        p={5}
        overflowX="hidden"
        overflowY="scroll"
      >
        {mergedItems.map((i, key) => (
          <ToolItem {...i} key={key} />
        ))}
      </Grid>
    </Box>
  );
};

export * from './ToolItem';
