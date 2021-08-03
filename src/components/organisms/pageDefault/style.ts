import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { background, color } from '../../../assets/css/color';
import { sizes } from '../../../assets/css/devices';
import { typography } from '../../../assets/css/typography';

const customMedia = generateMedia({
  ...sizes,
});

const Container = styled.section`
  background-color: ${background.app};
  min-height: 100%;
  height: auto;

  > section {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 80px);
  }

  ${customMedia.lessThan('smallTablet')`
    display: block;
    position: relative;

  `}
`;

const MainContent = styled.section`
  width: auto;
  flex: 1;
  min-height: calc(100vh - 80px);
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.p`
  margin-bottom: 100px;
  margin-top: auto;
  ${customMedia.lessThan('laptopM')`
    margin-bottom: 100px;
`}
  ${customMedia.lessThan('laptop')`
    margin-bottom: 150px;
`}
  ${customMedia.lessThan('tablet')`
    margin-bottom: 250px;
`}
  ${customMedia.lessThan('mobileL')`
    margin-bottom: 300px;
`}
`;
const BreadCrumb = styled.p`
  color: ${color.black};
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.extrabold};
  font-size: ${typography.size.m1}px;
  text-align: left;
  margin: 30px;
  margin-left: 40px;
  cursor: pointer;
  width: 20%;
`;
export { MainContent, Container, Footer, BreadCrumb };
