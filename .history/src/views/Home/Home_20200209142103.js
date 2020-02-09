import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector} from 'react-redux';
import Carousel from '/components/Carousel/Carousel';

export default function Index() {
    let siteName = useSelector(state => state.site.name);

    return (
        <>
            <Helmet>
                <title>{`Home Page | ${siteName}`}</title>
            </Helmet>
            <Carousel />
        </>
    );
}
