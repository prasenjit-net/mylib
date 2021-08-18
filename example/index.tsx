import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Toolbox } from '../.';
import { Box, ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Toolbox
        title="My Title"
        items={['a', 'b', 'c', 'd', 'e', 'f']}
        color="red.100"
      />
      <Box
        color="green.500"
        border="1px"
        borderColor={'gray.300'}
        bgColor={'gray.100'}
      >
        Some text inside box
      </Box>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
