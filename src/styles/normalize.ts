import { css } from 'styled-components';

export const normalize = css`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  ol li,
  ul li {
    list-style: none;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    font-weight: inherit;
  }
  img {
    vertical-align: top;
  }
  html,
  body {
    font-size: 14px;
    line-height: 1;
    height: 100%;
  }
  input[type='text'],
  input[type='email'],
  input[type='tel'],
  input[type='number'],
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
  input,
  button,
  textarea {
    font-family: inherit;
  }
  html {
    scroll-behavior: smooth;
  }

  .fp-watermark {
    display: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }
`;
