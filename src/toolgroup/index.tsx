import React from 'react';
import { Box, Heading, Grid, Divider } from '@chakra-ui/react';
import { Layers } from '@craftjs/layers';
import { Toolbox, ToolItemProps } from '../toolbox';

export interface ToolGroupProps {
  items?: ToolItemProps[];
}

export const ToolGroup = ({ items }: ToolGroupProps) => {
  return (
    <Grid boxShadow="lg" flex={1} p={2}>
      <Toolbox items={items} />
      <Box>
        <Divider />
        <Heading fontSize="md" m="3">
          Layers
        </Heading>
        <Layers expandRootOnLoad={true} />
      </Box>
    </Grid>
  );
};
