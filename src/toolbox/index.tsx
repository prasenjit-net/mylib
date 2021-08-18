import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';

export interface ToolboxProps {
  title: string;
  color: string;
  children?: JSX.Element[] | JSX.Element;
}

export const Toolbox = (props: ToolboxProps) => {
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
        {props.children}
      </Grid>
    </Box>
  );
};
