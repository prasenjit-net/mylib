import React from 'react';
import {
  Box,
  Image,
  Editable,
  EditablePreview,
  EditableInput,
} from '@chakra-ui/react';
import { useNode } from '@craftjs/core';

export interface BannerProps {
  title?: string;
  subTitle?: string;
}

export const Banner = ({ title, subTitle, ...rest }: BannerProps) => {
  const {
    connectors: { connect },
    actions: { setProp },
  } = useNode();
  return (
    <Box {...rest} ref={(ref) => connect(ref as HTMLElement)}>
      <Image src="https://picsum.photos/4000/2000" alt="banner background" />
      <Editable value={title} onChange={(nv) => setProp((p) => (p.title = nv))}>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable
        value={subTitle}
        onChange={(nv) => setProp((p) => (p.subTitle = nv))}
        fontSize="md"
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
    </Box>
  );
};

Banner.craft = {
  name: 'Banner',
  props: {
    margin: '2',
    title: 'Page Title',
    subTitle: 'Page Sub Title',
  },
  rules: {
    canMoveIn: () => true,
  },
};
