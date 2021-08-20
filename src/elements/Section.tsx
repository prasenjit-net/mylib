import React, { ReactNode } from 'react';
import { useNode } from '@craftjs/core';
import { Flex } from '@chakra-ui/react';

export interface SectionProps {
  children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Flex
      ref={(ref) => connect(ref as HTMLDivElement)}
      as="section"
      minHeight={10}
      bgColor="gray.200"
      m="2"
      alignItems="stretch"
    >
      {children}
    </Flex>
  );
};

Section.craft = {
  name: 'Section',
  rules: {
    canMoveIn: () => true,
  },
};
