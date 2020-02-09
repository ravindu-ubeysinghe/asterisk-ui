import React from 'react';
import { render } from 'react-snapshot';

import App from './components/App/App';

import 'bootstrap/dist/css/bootstrap.css';
import './variables.scss';
import './index.scss';

render(
    <App />,
    document.getElementById('root')
);
