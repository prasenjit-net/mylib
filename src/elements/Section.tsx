import React, { ReactNode } from 'react';
import { useNode } from '@craftjs/core';
import { Flex } from '@chakra-ui/react';

export interface SectionProps {
  children?: ReactNode;
}

export const Section = ({ children, ...props }: SectionProps) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Flex
      ref={(ref) => connect(ref as HTMLDivElement)}
      as="section"
      minHeight={10}
      alignItems="stretch"
      {...props}
    >
      {children}
    </Flex>
  );
};

Section.craft = {
  name: 'Section',
  props: {
    m: '2',
    bgColor: 'gray.200',
  },
  rules: {
    canMoveIn: () => true,
  },
};
