import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import { ToolItem } from './ToolItem';

export interface ToolboxProps {
  title: string;
  items: string[];
}

export const Toolbox = (props: ToolboxProps) => {
  const displayItems = props.items || [];
  return (
    <Box p="5">
      <Heading mb={3}>{props.title}</Heading>
      <Grid
        direction="row"
        wrap="wrap"
        rounded="md"
        boxShadow="lg"
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap={6}
        p={5}
      >
        {displayItems.map((t, i) => (
          <ToolItem text={t} key={i} />
        ))}
      </Grid>
    </Box>
  );
};
