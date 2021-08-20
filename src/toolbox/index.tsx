import { Flex, Grid, Heading, Divider } from '@chakra-ui/react';
import React from 'react';
import { ToolItem, ToolItemProps } from './ToolItem';

export interface ToolboxProps {
  title: string;
  items: ToolItemProps[];
}

export const Toolbox = (props: ToolboxProps) => {
  return (
    <Flex p="5" direction="column" flex={1} rounded="md" boxShadow="lg">
      <Heading mb={3}>{props.title}</Heading>
      <Divider />
      <Grid
        direction="row"
        wrap="wrap"
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap={6}
        p={5}
      >
        {props.items.map((i, key) => (
          <ToolItem text={i.text} key={key} icon={i.icon} />
        ))}
      </Grid>
    </Flex>
  );
};

export * from './ToolItem';
