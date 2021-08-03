/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProductContext } from '../../../context/productContext';
import { IProduct } from '../../../models/product';

import {
  Container,
  TextTitle,
  ContainerInfos,
  IconLocation,
  IconFavorite,
  IconContact,
  ContainerAutoComplete,
  IconSearch,
  Box,
  Selector,
  ContainerOptions,
  Row,
} from './style';

const HeaderBar: React.FC = () => {
  const history = useHistory();
  const { products, setProducts, getProducts } = useProductContext();
  const [searchValue, setSearchValue] = useState<string>();
  const [filteredOptions, setFilteredOptions] = useState<IProduct[]>();
  const handleChange = (value: string): void => {
    getProducts();
    setSearchValue(value);
    if (value.length >= 3 && products) {
      const options = products.filter((optionName) =>
        optionName.title.toLowerCase().startsWith(value.toLowerCase()),
      );

      setFilteredOptions(options);
    } else {
      setFilteredOptions([]);
    }
  };
  const handleSelectOption = (selectedProduct: IProduct): void => {
    setSearchValue(selectedProduct.title);
    setProducts([selectedProduct]);
    setFilteredOptions([]);
  };

  const handleBackHome = (): void => {
    history.push('/');
    getProducts();
    setSearchValue(undefined);
  };
  const isOnWishlist = window.location.pathname === '/wishlist';
  return (
    <Container>
      <ContainerInfos>
        <TextTitle onClick={() => handleBackHome()} id="qa-button-home">
          MagaNets
        </TextTitle>
        <ul>
          <li>
            <IconLocation />
            Cidade: São Paulo
          </li>
          <li>
            <IconContact />
            Central de atendimento
          </li>
          <li onClick={() => history.push('/wishlist')} id="qa-button-wishlist">
            <IconFavorite />
            Lista de desejos
          </li>
        </ul>
      </ContainerInfos>
      <Box>
        <ContainerAutoComplete isDisabled={isOnWishlist}>
          <IconSearch />
          <Selector
            isDisabled={isOnWishlist}
            disabled={isOnWishlist}
            id="qa-search"
            placeholder="Busca"
            value={searchValue || ''}
            onChange={(event) => handleChange(event.target.value)}
          />
        </ContainerAutoComplete>
        <ContainerOptions show={!!filteredOptions}>
          {filteredOptions ? (
            filteredOptions?.map((currentProduct) => (
              <Row
                id={`qa-find-search-${currentProduct.id}`}
                key={String(currentProduct.id)}
                onClick={() => handleSelectOption(currentProduct)}
              >
                <p> {currentProduct.title.toLowerCase()}</p>
              </Row>
            ))
          ) : (
            <></>
          )}
        </ContainerOptions>
      </Box>
    </Container>
  );
};

export default HeaderBar;
