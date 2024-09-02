import { normalize } from './normalize';
import { theme } from './theme';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


  body {
    font-family: ${theme.fonts.nunito}, sans-serif;
    color: ${theme.colors.text.white_100};
    background: #0B002C;
    background-image: url("/images/blur-ellipses.svg");
    background-size: cover;
    hyphens: auto;
    overflow-wrap: anywhere;
    position: relative;

    width: 100%;
    
    ::-webkit-scrollbar {
      width: 10px;               /* ширина scrollbar */
    }
    ::-webkit-scrollbar-track {
      background: transparent;        /* цвет дорожки */
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 20px;       /* закругления плашки */
      background-color: ${theme.colors.blue.blue_5};    /* цвет плашки */
    }
    /* scrollbar-gutter: stable; */
    /* @media (max-width : 768px){

    ::-webkit-scrollbar {
      display: none;
    } */

    /* } */
  }

  /* normalize */
  ${normalize}
`;
