/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, createContext, useEffect } from 'react';
import { IProduct } from '../models/product';
import {
  addRemoveProductFromWishlist,
  getAllProducts,
} from '../services/products/productsService';
import { useToast } from './toast';

type ProductProviderProps = {
  setProducts: (products: IProduct[]) => void;
  products: IProduct[];
  updateWishlist: (products: IProduct) => void;
  getProducts: (value: void) => void;
};

export const ProductContext = createContext<ProductProviderProps>(
  {} as ProductProviderProps,
);

export const ProductProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async (): Promise<void> => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      addToast({
        type: 'error',
        content: 'Erro ao buscar os produtos.',
      });
    }
  };

  const updateWishlist = async (updateProduct: IProduct): Promise<void> => {
    try {
      await addRemoveProductFromWishlist(updateProduct);
      await getProducts();
      addToast({
        type: 'success',
        content: updateProduct.onWishlist
          ? 'Produto removido da lista de desejos.'
          : 'Produto adicionado na lista de desejos.',
      });
    } catch (err) {
      addToast({
        type: 'error',
        content: 'Erro ao alterar o produto.',
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{ products, setProducts, updateWishlist, getProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = (): ProductProviderProps =>
  useContext(ProductContext);
