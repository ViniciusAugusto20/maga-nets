import styled from 'styled-components';
import { color } from '../../assets/css/color';
import { typography } from '../../assets/css/typography';

const ContainerWishlist = styled.div`
  margin: 0px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const BoxEmptyWishlist = styled.div`
  padding: 20px;
  height: 200px;
  p {
    margin-top: 55px;
    font: normal normal 600 16px/34px ${typography.type.primary};
    color: ${color.black};
    text-align: center;
  }
`;
export { ContainerWishlist, BoxEmptyWishlist };
