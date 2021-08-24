import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';
import { DefaultSettings } from '../../components';
import { useNode } from '@craftjs/core';

export const BannerSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  let bgUrl = '';
  if (props.backgroundImage) {
    bgUrl = props.backgroundImage as string;
    console.log(bgUrl);
    // bgUrl = bgUrl.substring(4);
    bgUrl = bgUrl.substring(4, bgUrl.length - 1);
  }
  return (
    <DefaultSettings>
      <FormControl as="fieldset">
        <FormLabel as="legend">Background image URL</FormLabel>
        <Input
          type="text"
          value={bgUrl}
          onChange={(next) =>
            setProp((p) => (p.backgroundImage = `url(${next.target.value})`))
          }
        />
        <FormHelperText>Set a background image for banner</FormHelperText>
      </FormControl>
    </DefaultSettings>
  );
};
