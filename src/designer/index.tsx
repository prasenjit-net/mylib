import React from 'react';
import { VStack } from '@chakra-ui/react';

export interface DesignerProps {
  text: string;
}

export const Designer = ({ text }: DesignerProps) => {
  return (
    <VStack>
      <span>{text}</span>
    </VStack>
  );
};
