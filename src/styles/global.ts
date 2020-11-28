import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
  }

  body {
    background: #fff;
    color: #231F20;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  #root {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    cursor: pointer;
  }
`;
