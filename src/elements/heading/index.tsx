import React from 'react';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import { useNode } from '@craftjs/core';
import { HeadingSettings } from './HeadingSettings';

export * from './HeadingSettings';

export interface HeadingProps {
  text: string;
}

export const Heading = ({ text, ...rest }: HeadingProps) => {
  const {
    connectors: { connect },
    actions: { setProp },
    // props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <Editable
      value={text}
      onChange={(nv) => setProp((p) => (p.text = nv))}
      ref={(ref) => connect(ref as HTMLElement)}
      fontWeight=""
    >
      <EditablePreview {...rest} />
      <EditableInput {...rest} />
    </Editable>
  );
};

Heading.craft = {
  name: 'Heading',
  props: {
    margin: '2',
    fontSize: '2xl',
    fontWeight: 'bold',
  },
  rules: {
    canMoveIn: () => true,
  },
  related: {
    settings: HeadingSettings,
  },
};
