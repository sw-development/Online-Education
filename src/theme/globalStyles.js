import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: #111;
    }
`;

export default GlobalStyle;
