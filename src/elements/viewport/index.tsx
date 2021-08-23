import React, { ReactNode } from 'react';
import { useNode } from '@craftjs/core';
import { Box } from '@chakra-ui/react';
import { ViewportSettings } from './ViewportSettings';

export * from './ViewportSettings';

export interface ViewportProps {
  m?: string;
  children?: ReactNode;
}

export const Viewport = ({ children, ...rest }: ViewportProps) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Box
      as="main"
      h="100%"
      {...rest}
      ref={(ref) => connect(ref as HTMLDivElement)}
    >
      {children}
    </Box>
  );
};

Viewport.craft = {
  name: 'Viewport',
  props: {
    margin: '2',
  },
  rules: {
    canMoveIn: () => true,
  },
  related: {
    settings: ViewportSettings,
  },
};
