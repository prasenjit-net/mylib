export * from './section';
export * from './viewport';
export * from './grid';
export * from './heading';
export * from './banner';

import React from 'react';
import { BiRectangle } from 'react-icons/bi';
import { BsGrid3X2 } from 'react-icons/bs';
import { BiHeading } from 'react-icons/bi';
import { GiKnightBanner } from 'react-icons/gi';
import { Element } from '@craftjs/core';
import { Section } from './section';
import { Grid } from './grid';
import { Heading } from './heading';
import { Banner } from './banner';

export const DEFAULT_TOOLS = [
  {
    text: 'Heading',
    icon: BiHeading,
    designElement: <Heading text="Heading" />,
  },
  {
    text: 'Section',
    icon: BiRectangle,
    designElement: <Element is={Section} canvas />,
  },
  {
    text: 'Grid',
    icon: BsGrid3X2,
    designElement: <Element is={Grid} canvas />,
  },
  {
    text: 'Banner',
    icon: GiKnightBanner,
    designElement: <Banner />,
  },
];
