import React from 'react';
import { render } from 'react-snapshot';

import App from 'components/App/App';

import 'bootstrap/dist/css/bootstrap.css';

render(
    <App />,
    document.getElementById('root')
);
