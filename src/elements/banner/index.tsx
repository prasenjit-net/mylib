import React from 'react';
import { Box } from '@chakra-ui/react';
import { useNode, Element } from '@craftjs/core';
import { Heading } from '../heading';
import { BannerSettings } from './BannerSettings';

export * from './BannerSettings';

export interface BannerProps {
  title?: string;
  subTitle?: string;
}

export const Banner = ({ title, subTitle, ...rest }: BannerProps) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Box
      {...rest}
      ref={(ref) => connect(ref as HTMLElement)}
      backgroundSize="100%"
      backgroundPosition="50% 50%"
    >
      <Element is={Heading} text="Page Title" id="title" />
      <Element
        is={Heading}
        text="Page Sub Title"
        id="sub_title"
        fontSize="md"
      />
    </Box>
  );
};

Banner.craft = {
  name: 'Banner',
  props: {
    margin: '2',
    padding: '2',
    height: 36,
    backgroundImage: 'url(https://picsum.photos/4000/2000)',
    color: '#ffffff',
    title: 'Page Title',
    subTitle: 'Page Sub Title',
  },
  rules: {
    canMoveIn: () => true,
  },
  related: {
    settings: BannerSettings,
  },
};
