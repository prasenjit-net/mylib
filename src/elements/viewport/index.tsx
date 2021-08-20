import React, { ReactNode } from 'react';
import { useNode } from '@craftjs/core';
import { Box } from '@chakra-ui/react';

export interface ViewportProps {
  children?: ReactNode;
}

export const Viewport = ({ children }: ViewportProps) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Box as="main" m="2" ref={(ref) => connect(ref as HTMLDivElement)}>
      {children}
    </Box>
  );
};

Viewport.craft = {
  name: 'Viewport',
  rules: {
    canMoveIn: () => true,
  },
};
