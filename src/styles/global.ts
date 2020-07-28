import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    --primary-color: #444;
    --secondary-color: #c66;
    --background-color: #f9f4ed;
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background: var(--background-color);
    color: var(--primary-color);
  }

  body, input, button {
    font-family: 'bitter', serif;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%
  }

  @media only screen and (max-width: 450px) {
    html {
      font-size: 48.5%;
    }
  }
`;
