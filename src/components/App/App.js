import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Site from 'components/Site/Site';
import theme from 'theme/theme';
import GlobalStyles from 'theme/GlobalStyles';
import store from 'store';


export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Site />
                <GlobalStyles />
            </Provider>
        </ThemeProvider>
    );
}