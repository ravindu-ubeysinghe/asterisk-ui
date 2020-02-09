import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Site from 'components/Site/Site';

import store from 'store';
import theme from 'theme/theme';

const GlobalStyle = createGlobalStyle`
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
    b {
        font-size: 15px;
        color: ${theme.colors.black};
    }

    a,
    a:hover {
        text-decoration: none;
        color: ${theme.colors.black};
    }
`;

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Site />
                <GlobalStyle />
            </Provider>
        </ThemeProvider>
    );
}