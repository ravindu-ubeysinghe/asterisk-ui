import { createGlobalStyle } from 'styled-components';
import theme from 'theme/theme';

const GlobalStyles = createGlobalStyle`
        body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.black};
    }

    p,
    a,
    span,
    strong,
    b,
    small,
    h4,
    h3,
    h2,
    h1 {
        color: ${theme.colors.black};
    }

    small {
        font-size: ${theme.fontSizes.small}
    }

    body {
        font-size: ${theme.fontSizes.body}
    }

    h4 {
        font-size: ${theme.fontSizes.h4}
    }

    h3 {
        font-size: ${theme.fontSizes.h3}
    }

    h2 {
        font-size: ${theme.fontSizes.h2}
    }

    h1 {
        font-size: ${theme.fontSizes.h1}
    }

    a,
    a:hover {
        text-decoration: none;
        color: ${theme.colors.black};
    }
`;

export default GlobalStyles;