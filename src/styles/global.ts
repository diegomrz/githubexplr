import { createGlobalStyle } from 'styled-components';

import background from '../assets/bg.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #2a2a2a url(${background}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }

  #root{
    display: block;
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
