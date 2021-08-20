export * from './section';
export * from './viewport';
export * from './grid';

import React from 'react';
import { BiRectangle } from 'react-icons/bi';
import { BsGrid3X2 } from 'react-icons/bs';
import { Element } from '@craftjs/core';
import { Section } from './section';
import { Grid } from './grid';

export const DEFAULT_TOOLS = [
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
];
