/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { PageDefault, Product } from '../../components';

import { IProduct } from '../../models/product';

import { ContainerProducts, BoxEmptyProducts } from './style';
import { useProductContext } from '../../context/productContext';

const Products = (): JSX.Element => {
  const { products, getProducts } = useProductContext();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <PageDefault breadCrumb="Home">
      <ContainerProducts>
        {products.length > 0 ? (
          products.map((product: IProduct) => (
            <Product key={product.id} currentProduct={product} />
          ))
        ) : (
          <BoxEmptyProducts>
            <p>Não foi possível carregar os produtos.</p>
          </BoxEmptyProducts>
        )}
      </ContainerProducts>
    </PageDefault>
  );
};

export default Products;
