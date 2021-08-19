import { Flex, ChakraProvider, extendTheme } from '@chakra-ui/react';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
const colors = {
  brand: {
    400: '#845EC2',
  },
};
const myTheme = extendTheme({ colors });

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS={true} theme={myTheme}>
      <Flex maxW={400} height="90vh" direction="row" alignItems="stretch">
        <Story />
      </Flex>
    </ChakraProvider>
  ),
];
