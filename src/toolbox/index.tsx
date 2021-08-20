import { Flex, Grid, Heading, Divider } from '@chakra-ui/react';
import React from 'react';
import { ToolItem, ToolItemProps } from './ToolItem';
import { BiRectangle } from 'react-icons/bi';
import { Section } from '../elements';
import { Element } from '@craftjs/core';

export interface ToolboxProps {
  title: string;
  items?: ToolItemProps[];
}

const sectionItem = {
  text: 'Section',
  icon: BiRectangle,
  designElement: <Element is={Section} canvas />,
} as ToolItemProps;

export const Toolbox = (props: ToolboxProps) => {
  let mergedItems;
  if (props.items) {
    mergedItems = [...props.items, sectionItem];
  } else {
    mergedItems = [sectionItem];
  }
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
        {mergedItems.map((i, key) => (
          <ToolItem {...i} key={key} />
        ))}
      </Grid>
    </Flex>
  );
};

export * from './ToolItem';
