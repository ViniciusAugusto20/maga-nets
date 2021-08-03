import React, { useMemo } from 'react';
import { useProductContext } from '../../../context/productContext';
import { IProduct } from '../../../models/product';
import { formatterMoney } from '../../../utils';
import {
  IconMark,
  IconRemove,
  Container,
  ProductContainer,
  ContainerActions,
  ProductImage,
  ProductInfo,
  ProductPrice,
  IconFavorite,
} from './style';

interface ICurrentProduct {
  currentProduct: IProduct;
}

const Product: React.FC<ICurrentProduct> = ({ currentProduct }) => {
  const { image, onWishlist, title, price } = currentProduct;
  const { updateWishlist } = useProductContext();
  const currentPageIsWishList = useMemo(() => {
    if (window.location.pathname === '/wishlist') {
      return true;
    }
    return false;
  }, []);

  return (
    <>
      <Container>
        <ContainerActions onWishList={currentPageIsWishList}>
          {currentPageIsWishList ? (
            <IconRemove
              onClick={() => updateWishlist(currentProduct)}
              id={`qa-remove-item-${currentProduct.id}`}
            />
          ) : (
            <IconMark
              onClick={() => updateWishlist(currentProduct)}
              id={`qa-add-item-${currentProduct.id}`}
            >
              <IconFavorite onWishList={onWishlist} />
            </IconMark>
          )}
        </ContainerActions>
        <ProductContainer>
          <ProductImage src={image} alt={title} />
          <ProductInfo>{title}</ProductInfo>
          <ProductPrice>{formatterMoney(price)}</ProductPrice>
        </ProductContainer>
      </Container>
    </>
  );
};

export default Product;
