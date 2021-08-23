import React, {
  ClassicComponent,
  FunctionComponent,
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { ROOT_NODE, useEditor, useNode } from '@craftjs/core';
import { createPortal } from 'react-dom';
import { Flex, Heading, IconButton, useDisclosure } from '@chakra-ui/react';
import { BsArrowsMove, BsArrowUp, BsGear, BsTrash } from 'react-icons/bs';
import { Settings } from '../settings';

export interface DecoratorProps {
  render: FunctionComponent | ClassicComponent;
}

export const Decorator = ({ render }: DecoratorProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useNode();
  const { actions, query, isActive, otherActive } = useEditor((state) => ({
    isActive: state.nodes[id].events.selected,
    otherActive: state.events.selected ? state.events.selected !== id : false,
  }));

  const {
    isHover,
    dom,
    name,
    movable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    movable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));
  const currentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add('component-selected');
      else dom.classList.remove('component-selected');
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    // @ts-ignore
    document
      .querySelector('.craft-js-renderer')
      .addEventListener('scroll', scroll);

    return () => {
      const renderer = document.querySelector('.craft-js-renderer');
      if (renderer) {
        renderer.removeEventListener('scroll', scroll);
      }
    };
  }, [scroll]);
  // @ts-ignore
  return (
    <>
      {(isHover && !otherActive) || isActive
        ? createPortal(
            <Flex
              bgColor="cyan.300"
              alignItems="center"
              mt="-20px"
              style={{
                position: 'fixed',
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              <Heading as="h6" size="sm">
                {name}
              </Heading>
              {movable && (
                <IconButton
                  aria-label="move element"
                  colorScheme="cyan.300"
                  color="black"
                  size="xs"
                  cursor="move"
                  ref={drag as LegacyRef<any>}
                  icon={<BsArrowsMove />}
                />
              )}
              {id !== ROOT_NODE && (
                <IconButton
                  aria-label="select parent"
                  colorScheme="cyan.300"
                  color="black"
                  size="xs"
                  onClick={() => {
                    actions.selectNode(parent);
                  }}
                  icon={<BsArrowUp />}
                />
              )}
              {deletable && (
                <IconButton
                  aria-label="delete"
                  colorScheme="cyan.300"
                  color="black"
                  size="xs"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                  icon={<BsTrash />}
                />
              )}
              {isActive && (
                <IconButton
                  aria-label="settings"
                  colorScheme="cyan.300"
                  color="black"
                  size="xs"
                  icon={<BsGear />}
                  onClick={onOpen}
                />
              )}
            </Flex>,
            document.querySelector('.page-container') as Element
          )
        : null}
      {render}
      <Settings isOpen={isOpen} onClose={onClose} />
    </>
  );
};
