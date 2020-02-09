import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/Header/Header';

export default function About() {
    return (
        <>
            <Header />
            <Helmet>
                <title>About | Food Central</title>
            </Helmet>
            <h1>About Page</h1>
        </>
    );
}