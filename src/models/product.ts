interface ISizeOfProduct {
  size: number;
}

export interface IProduct {
  id: number;
  sku: number;
  title: string;
  description: string;
  availableSizes: ISizeOfProduct[];
  price: number;
  installments: number;
  currencyId: string;
  currencyFormat: string;
  isFreeShipping: boolean;
  image: string;
  onWishlist: boolean;
}
