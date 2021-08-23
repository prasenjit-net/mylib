import React, { ReactNode } from 'react';
import { Grid as ChakraGrid } from '@chakra-ui/react';
import { useNode } from '@craftjs/core';
import { GridSettings } from './GridSettings';

export * from './GridSettings';

export interface GridProps {
  children?: ReactNode;
  m?: string;
  bgColor?: string;
  gridCount?: string;
}

export const Grid = ({ children, gridCount, ...props }: GridProps) => {
  const {
    connectors: { connect },
  } = useNode();
  if (!gridCount) {
    gridCount = '2';
  }
  const rowTemplate = 'repeat(' + gridCount + ', 1fr)';
  return (
    <ChakraGrid
      gap={3}
      minHeight={10}
      gridTemplateColumns={rowTemplate}
      ref={(ref) => connect(ref as HTMLDivElement)}
      {...props}
    >
      {children}
    </ChakraGrid>
  );
};
Grid.craft = {
  name: 'Grid',
  props: {
    margin: '2',
    bgColor: 'gray.300',
    gridCount: '2',
  },
  rules: {
    canMoveIn: () => true,
  },
  related: {
    settings: GridSettings,
  },
};
