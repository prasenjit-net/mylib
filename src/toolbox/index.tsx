import { Box, Grid, Heading, useToken } from '@chakra-ui/react';
import React from 'react';
import { ToolItem } from './ToolItem';

export interface ToolboxProps {
  title: string;
  items: string[];
  color: string;
}

export const Toolbox = (props: ToolboxProps) => {
  const [brand400] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    // the subkey(s), resolving to `theme.colors.brand.400`
    ['brand.400']
    // a single fallback or fallback array matching the length of the previous arg
  );
  const displayItems = props.items || [];
  return (
    <Box p="5">
      <Heading mb={3} color={brand400}>
        {props.title}
      </Heading>
      <Heading mb={3} color={props.color}>
        {props.title}
      </Heading>
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
