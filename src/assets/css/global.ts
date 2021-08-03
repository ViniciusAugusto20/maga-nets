import { createGlobalStyle, css } from 'styled-components';
import { color, background } from './color';
import { typography } from './typography';

export const bodyStyles = css`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Open Sans Light'), local('Open-Sans-Light'),
      url('../fonts/open-sans-v18-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('Open-Sans-Regular'),
      url('../fonts/open-sans-v18-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    src: local('Open Sans Regular Italic'), local('Open-Sans-Regular-Italic'),
      url('../fonts/open-sans-v18-latin-italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Open Sans SemiBold'), local('Open-Sans-SemiBold'),
      url('../fonts/open-sans-v18-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Open Sans Bold'), local('Open-Sans-Bold'),
      url('../fonts/open-sans-v18-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    src: local('Open Sans ExtraBold'), local('Open-Sans-ExtraBold'),
      url('../fonts/open-sans-v18-latin-800.woff2') format('woff2');
  }

  html,
  body,
  figure,
  ul,
  table,
  fieldset {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s2}px;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: ${background.app};
    color: ${color.white};
  }
  body {
    overflow: hidden;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${bodyStyles}
`;
