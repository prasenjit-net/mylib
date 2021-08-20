import { Flex, Text, Icon } from '@chakra-ui/react';
import React, {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
  FunctionComponent,
} from 'react';

export interface ToolItemProps {
  text: string;
  icon?: FunctionComponent;
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
      height={height + 'px'}
      border="1px"
      borderColor="gray.300"
      boxShadow="md"
      bgColor="gray.50"
      rounded="md"
      direction="column"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      draggable={true}
      _hover={{ boxShadow: 'lg' }}
    >
      <Icon as={props.icon} fontSize="2xl" mb={2} />
      <Text fontSize="xs">{props.text}</Text>
    </Flex>
  );
};
