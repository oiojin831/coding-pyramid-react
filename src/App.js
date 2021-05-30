import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { firestore } from './firebase';

const data = firestore
  .collection('goods')
  .get()
  .then(querySnapshot => {
    const myArr = [];
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      myArr.push(doc.data());
    });
    console.log(myArr);
    setData(myArr);
  })
  .catch(error => {
    console.log('Error getting documents: ', error);
  });

console.log('data', data);

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
  function printProduct(product, index) {
    return (
      <ListItem key={`${index}-${product.itle}`}>
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
