import React, { ReactNode } from 'react';
import { useNode } from '@craftjs/core';
import { Flex } from '@chakra-ui/react';
import { SectionSettings } from './SectionSettings';

export * from './SectionSettings';

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
    margin: '2',
    bgColor: '#DCE9F3',
    color: '#000000',
  },
  rules: {
    canMoveIn: () => true,
  },
  related: {
    settings: SectionSettings,
  },
};
