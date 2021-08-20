import React, { MouseEvent, MouseEventHandler, RefObject, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { Element, Frame, useEditor } from '@craftjs/core';
import { Section, Viewport } from '../elements';

export interface DesignerProps {
  designRef: RefObject<HTMLDivElement>;
}

export const Designer = ({ designRef }: DesignerProps) => {
  const {
    connectors,
    actions: { /*setOptions, */ selectNode },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const designerRef = useRef(null);
  const clickOutside: MouseEventHandler<HTMLDivElement> = (
    e: MouseEvent<HTMLDivElement>
  ) => {
    if (designerRef.current == e.target) {
      selectNode();
    }
  };
  return (
    <Box
      flex={3}
      p={5}
      boxShadow="lg"
      rounded="md"
      className="page-container"
      onClick={clickOutside}
      ref={designerRef}
    >
      <div
        className="craft-js-renderer"
        ref={(ref) =>
          connectors.select(connectors.hover(ref as HTMLElement, ''), '')
        }
      />
      <div ref={designRef}>
        <Frame>
          <Element is={Viewport} canvas>
            <Element is={Section} canvas />
          </Element>
        </Frame>
      </div>
    </Box>
  );
};
