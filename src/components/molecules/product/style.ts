import { IoHeart, IoCloseCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

import { color } from '../../../assets/css/color';
import { typography } from '../../../assets/css/typography';

interface IActionButton {
  onWishList: boolean;
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  border: 2px solid ${color.lightGray};
  border-radius: 5px;
  background-color: ${color.white};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    margin: 40px 0px;
    :last-child {
      margin-bottom: 140px;
      bottom: 0px;
      top: 0px;
    }
  }
`;

const ContainerActions = styled.div<IActionButton>`
  display: flex;
  align-self: ${(props) => (props.onWishList ? 'flex-end' : 'flex-start')};
`;

const IconFavorite = styled(IoHeart)<IActionButton>`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  color: ${(props) => (props.onWishList ? color.red : color.white)};
  cursor: pointer;
  position: relative;
  z-index: 101;
  left: 4px;
  top: 5px;
`;

const IconMark = styled.div`
  background-color: ${color.black};
  width: 31px;
  height: 25px;
  position: relative;
  margin-left: 5px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: ${color.black};
    transform: rotateY(180deg) rotateZ(45deg) translateY(-50%);
    border: 1px solid ${color.black};
    border-radius: 4px;
    border-bottom: 0;
    border-left: 0;
    top: 20px;
    z-index: 100;
    left: 12px;
  }
`;

const IconRemove = styled(IoCloseCircleOutline)`
  width: 32px;
  height: 32px;
  margin-left: 30px;
  color: ${color.black};
  cursor: pointer;
  position: relative;
`;

const ProductImage = styled.img`
  height: 230px;
  width: 250px;
`;

const ProductInfo = styled.span`
  margin-top: 20px;
  font-family: ${typography.type.primary};
  color: ${color.black};
  opacity: 0.8;
  font-weight: ${typography.weight.semiBold};
  font-size: ${typography.size.s2}px;
`;

const ProductPrice = styled.span`
  margin-top: 10px;
  font-family: ${typography.type.primary};
  color: ${color.gold};
  font-weight: ${typography.weight.semiBold};
  font-size: ${typography.size.s2}px;
`;

export {
  Container,
  ProductContainer,
  ContainerActions,
  IconFavorite,
  ProductInfo,
  ProductPrice,
  ProductImage,
  IconMark,
  IconRemove,
};
