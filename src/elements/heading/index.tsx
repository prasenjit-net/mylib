import React from 'react';
import { Heading as ChakraHeading } from '@chakra-ui/react';
import { useNode } from '@craftjs/core';
import { HeadingSettings } from './HeadingSettings';

export * from './HeadingSettings';

export interface HeadingProps {
  text: string;
}

export const Heading = ({ text, ...rest }: HeadingProps) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <ChakraHeading
      fontSize="2xl"
      ref={(ref) => connect(ref as HTMLElement)}
      {...rest}
    >
      {text}
    </ChakraHeading>
  );
};

Heading.craft = {
  name: 'Heading',
  props: {
    margin: '2',
    fontSize: '2xl',
  },
  rules: {
    canMoveIn: () => true,
  },
  related: {
    settings: HeadingSettings,
  },
};
