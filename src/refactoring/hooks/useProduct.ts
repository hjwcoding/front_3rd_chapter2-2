import { useState } from "react";
import { Product } from "../../types.ts";

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  //상품정보 수정
  const updateProduct = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  //상품추가
  const addProduct = (newProduct: Product) => {
    console.log(`addProduct`);
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return { products, updateProduct, addProduct };
};