import { createGlobalStyle } from 'styled-components';
import { getHexaColor } from './color/getHexaColor';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${getHexaColor('black')};
    font-weight: 600;
  }
`;
