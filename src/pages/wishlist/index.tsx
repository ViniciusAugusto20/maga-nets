/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';

import { PageDefault, Product } from '../../components';
import { useProductContext } from '../../context/productContext';

import { IProduct } from '../../models/product';

import { ContainerWishlist, BoxEmptyWishlist } from './style';

const Wishlist = (): JSX.Element => {
  const { products, getProducts } = useProductContext();
  const productsOnWishList = useMemo(
    () => products.filter((product: IProduct) => product.onWishlist === true),
    [products],
  );
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <PageDefault breadCrumb="Home > Lista de desejos">
      <ContainerWishlist>
        {productsOnWishList && productsOnWishList?.length > 0 ? (
          productsOnWishList?.map((product: IProduct) => (
            <Product key={product.id} currentProduct={product} />
          ))
        ) : (
          <BoxEmptyWishlist>
            <p> Sua lista de desejos está vazia.</p>
          </BoxEmptyWishlist>
        )}
      </ContainerWishlist>
    </PageDefault>
  );
};

export default Wishlist;
