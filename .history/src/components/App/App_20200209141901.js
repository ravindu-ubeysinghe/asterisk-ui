import React from 'react';
import { Provider } from 'react-redux';

import Site from 'components/Site/Site';

import store from 'store';

export default function App() {
    return (
        <Provider store={store}>
            <Site />
        </Provider>
    );
}