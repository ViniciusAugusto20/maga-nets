import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { IoLocationSharp, IoHeart, IoCall, IoSearch } from 'react-icons/io5';
import { color } from '../../../assets/css/color';
import { typography } from '../../../assets/css/typography';
import { sizes } from '../../../assets/css/devices';

interface IAutoCompleteSelector {
  isDisabled: boolean;
}
interface IAutoCompleteItens {
  show: boolean;
}
const customMedia = generateMedia({
  ...sizes,
});

const Container = styled.header`
  min-height: 120px;
  display: grid;
  flex-direction: row;
  align-items: center;
  background-color: ${color.purple};

  ${customMedia.lessThan('tablet')`
      border-bottom: 1px solid ${color.lightGray};
    }
  `}
`;

const ContainerInfos = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 40px;
  ul {
    padding-top: 32px;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 30px;
    ${customMedia.lessThan('tablet')`
      grid-template-rows: repeat(4, auto);
      grid-template-columns: repeat(1, 1fr);
  `}
  }
  li {
    cursor: pointer;
    font-family: ${typography.type.primary};
    color: ${color.white};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s3}px;
  }
`;

const TextTitle = styled.span`
  margin-top: 20px;
  cursor: pointer;
  font-family: ${typography.type.primary};
  color: ${color.white};
  font-weight: ${typography.weight.semiBold};
  font-size: ${typography.size.l1}px;
  ${customMedia.lessThan('tablet')`
  margin-top: 60px;
  margin-bottom:20px;
  margin-left: 40px;
`}
  ${customMedia.lessThan('mobileL')`
  margin-bottom:20px;
  margin-left: 40px;
`}
`;

const IconLocation = styled(IoLocationSharp)`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  color: ${color.white};
`;
const IconContact = styled(IoCall)`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  color: ${color.white};
`;

const IconFavorite = styled(IoHeart)`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  color: ${color.white};
`;
const IconSearch = styled(IoSearch)`
  width: 28px;
  height: 28px;
  margin: 0px 15px;
  margin-top: -5px;
  color: ${color.black};
  opacity: 0.5;
`;

const ContainerAutoComplete = styled.div<IAutoCompleteSelector>`
  display: flex;
  width: 100%;
  max-width: 600px;
  background-color: ${(props) =>
    props.isDisabled ? color.mediumGray : color.white};
  align-self: 'flex-start';
  height: 50px;
  margin-top: 10px;
  margin-right: 75px;
  align-items: center;
  justify-content: center;
  align-content: center;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    margin-top: 80px;
    margin-bottom: 20px;
  }
  ${customMedia.lessThan('tabletL')`
  margin-top: 80px;
  margin-bottom:20px;
  margin-right:180px;

`}
  ${customMedia.lessThan('tablet')`
  margin-top: 60px;
  margin-bottom:20px;
  margin-left: 40px;
`}
  ${customMedia.lessThan('mobileL')`
  margin-top: 130px;
  margin-bottom:20px;
  margin-right: 10px;
`}
`;

const Row = styled.div`
  margin: 0px !important;
  background-color: white;
  height: 37px;
  cursor: pointer;
  width: 100%;
  max-width: 550px;
  text-align: center;
  flex-direction: row;
  border: 1px solid ${color.lightGray};
  p {
    padding-top: 8px;
    text-align: left;
    margin: 0px;
    margin-left: 20px;
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s1}px;
    font-weight: 300;
    color: #6f6f6f;
    letter-spacing: 0.24px;
    text-transform: capitalize;
  }
  &:hover {
    background-color: ${color.purple};
    color: white !important;
    border-radius: 0px !important;
    p {
      color: white;
    }
  }
  ${customMedia.lessThan('tablet')`
  margin-top: 60px;
  margin-bottom:20px;
  margin-left: 40px;
`}
  ${customMedia.lessThan('mobileL')`
  margin-bottom:20px;
  margin-left: 40px;
`}
`;

const ContainerOptions = styled.div<IAutoCompleteItens>`
  overflow-x: hidden;
  width: 100%;
  max-width: 550px;
  overflow-y: initial;
  z-index: 102;
  position: absolute;
  top: 100%;
  margin-top: 10px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  ${customMedia.lessThan('tablet')`
  margin-top: 60px;
  margin-bottom:20px;
  margin-left: 45px;
  width: 500px;
  left: 0px;
  top: 40%;
`}

  ${customMedia.lessThan('mobileL')`
  margin-top: 110px;
  width: 275px;
  margin-bottom:20px;
  margin-left: 45px;
  left: 0px;
  top: 40%;
`}
`;

const Box = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  align-content: right;
  flex-direction: row-reverse;
  border: none !important;
  position: relative;
  ${customMedia.lessThan('tablet')`
  margin-top: 60px;
  margin-bottom:20px;
  margin-left: 40px;
`}
  ${customMedia.lessThan('mobileL')`
  margin-bottom:20px;
  margin-left: 40px;
`}
`;

const Selector = styled.input<IAutoCompleteSelector>`
  appearance: none;
  width: 100%;
  max-width: 600px;
  height: 40px;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.bold};
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  border: none;
  color: ${color.black};
  background: none;
  text-align: left;
  letter-spacing: 0px;
  ::placeholder {
    color: ${color.black};
    opacity: 0.5;
    font-family: ${typography.type.primary};
  }
  &:-ms-expand {
    display: none;
  }
  &:focus {
    outline: none;
    border: none;
    color: ${color.black};
    background: none;
    opacity: 1;
    ::placeholder {
      color: white;
    }
  }
`;

export {
  Container,
  TextTitle,
  ContainerInfos,
  ContainerAutoComplete,
  IconLocation,
  IconContact,
  IconFavorite,
  IconSearch,
  Row,
  ContainerOptions,
  Box,
  Selector,
};
