import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
    </ChakraProvider>
  );
}
