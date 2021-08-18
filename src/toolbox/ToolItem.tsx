import { Flex, Text } from '@chakra-ui/react';
import React, { useRef, useLayoutEffect, useState, useCallback } from 'react';

export interface ToolItemProps {
  text: string;
  icon?: JSX.Element;
}

export const ToolItem = (props: ToolItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const onResize = useCallback(() => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      setHeight(rect.width);
    }
  }, []);
  useLayoutEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <Flex
      ref={itemRef}
      height={height}
      border="1px"
      borderColor={'gray.300'}
      bgColor={'gray.100'}
      rounded="md"
      direction="column"
      alignItems={'center'}
      justifyContent={'space-around'}
    >
      {props.icon}
      <Text>{props.text}</Text>
    </Flex>
  );
};
