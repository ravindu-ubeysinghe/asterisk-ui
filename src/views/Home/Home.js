import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector} from 'react-redux';

import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';

export default function Index() {
    let siteName = useSelector(state => state.site.name);

    return (
        <>
            <Helmet>
                <title>{`Home Page | ${siteName}`}</title>
            </Helmet>
            <Header />
            <div className="container">
                <Carousel />
            </div>
        </>
    );
}