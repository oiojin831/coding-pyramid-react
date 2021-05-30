import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';

const products = [
  {
    title: '맥스 97',
    category: '신발',
    price: 180000
  },
  {
    title: '맥스 95',
    category: '신발',
    price: 200000
  },
  {
    title: '검정 티셔츠',
    category: '옷',
    price: 30000
  },
  {
    title: '자전거',
    category: '운동기기',
    price: 200000
  }
];

export default function App() {
  function printProduct(product) {
    return (
      <ListItem>
        {`${product.title} - ${product.category} - ${product.price}원`}
      </ListItem>
    );
  }
  return (
    <ChakraProvider>
      <UnorderedList>{products.map(printProduct)}</UnorderedList>
    </ChakraProvider>
  );
}
