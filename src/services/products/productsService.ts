import { BASE_URL } from '../../config/env';
import { IProduct } from '../../models/product';
import { getData, putData } from '../defaultServices';

export const getAllProducts = async (): Promise<IProduct[]> => {
  const response = await getData(`${BASE_URL}/products`);
  return response;
};

export const addRemoveProductFromWishlist = async (
  product: IProduct,
): Promise<IProduct[]> => {
  const updateParams = {
    ...product,
    onWishlist: !product.onWishlist,
  };

  const response = await putData(
    `${BASE_URL}/products/${product.id}`,
    updateParams,
  );
  return response;
};
