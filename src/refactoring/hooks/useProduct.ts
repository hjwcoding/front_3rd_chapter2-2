import { useState } from 'react';
import { Product } from '../../types.ts';

const updateProduct = (updatedProduct: Product) => {
  useProducts((prevProducts: any[]) =>
    prevProducts.map(p => p.id === updatedProduct.id ? updatedProduct : p)
  );
};

const addProduct = (newProduct: Product) => {
  useProducts((prevProducts: any) => [...prevProducts, newProduct]);
};

export const useProducts = (initialProducts: Product[]) => {
  return { products: [], updateProduct: (prevProducts) => prevProducts.map(p => p.id === updatedProduct.id ? updatedProduct : p, addProduct: () => undefined };

}
